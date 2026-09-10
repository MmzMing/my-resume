import { useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useResumeStore } from "@/store/useResumeStore";
import { templateById } from "@/rhine/data";
import type { PortalPanelId } from "@/lib/portal-nav";

const DASHBOARD_PATH: Record<PortalPanelId, string> = {
  resumes: "/app/dashboard/resumes",
  templates: "/app/dashboard/templates",
  ai: "/app/dashboard/ai",
  settings: "/app/dashboard/settings",
};

/**
 * Full-viewport Rhine Lab terminal portal.
 *
 * The terminal is a self-contained vanilla-TS Three.js application living in
 * `@/rhine`. It is loaded lazily on the client (never during SSR) and must be
 * torn down on unmount: render loop, global listeners and the WebGL context
 * all release through the function returned by mount.
 *
 * The top-right nav routes into standalone Rhine-console pages so each
 * workbench surface keeps portal chrome without covering the 3D archive.
 */
export default function RhinePortal() {
  const hostRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const createResume = useResumeStore((state) => state.createResume);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let destroy: (() => void) | undefined;
    let cancelled = false;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    void import("@/rhine/main").then(({ mountRhinePortal }) => {
      // The route may have changed while the chunk was loading.
      if (cancelled || !host.isConnected) return;
      destroy = mountRhinePortal(host, {
        onNavigateApp: (target) => {
          navigate({ to: DASHBOARD_PATH[target] });
        },
        onEnterApp: () => {
          navigate({ to: DASHBOARD_PATH.resumes });
        },
        onUseTemplate: (templateId) => {
          // Same flow as the templates page: create a resume preconfigured
          // with the picked template, then jump straight into the workbench.
          const template = templateById(templateId);
          if (!template) {
            navigate({ to: DASHBOARD_PATH.templates });
            return;
          }
          const resumeId = createResume(templateId);
          const { resumes, updateResume } = useResumeStore.getState();
          const resume = resumes[resumeId];
          if (resume) {
            updateResume(resumeId, {
              globalSettings: {
                ...resume.globalSettings,
                themeColor: template.colorScheme.primary,
                sectionSpacing: template.spacing.sectionGap,
                paragraphSpacing: template.spacing.itemGap,
                pagePadding: template.spacing.contentPadding,
              },
              basic: {
                ...resume.basic,
                layout: template.basic.layout,
              },
            });
          }
          navigate({ to: "/app/workbench/$id", params: { id: resumeId } });
        },
      });
    });

    return () => {
      cancelled = true;
      destroy?.();
      document.body.style.overflow = previousOverflow;
    };
  }, [navigate, createResume]);

  return (
    <div
      ref={hostRef}
      className="fixed inset-0 z-40"
      aria-label="简历编辑器 三维门户"
    />
  );
}
