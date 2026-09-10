import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export type PortalPanelId = "resumes" | "templates" | "ai" | "settings";

interface PortalPanelMeta {
  /** Terminal-style index label shown in the panel header. */
  code: string;
  title: string;
  subtitle: string;
}

export const PANEL_META: Record<PortalPanelId, PortalPanelMeta> = {
  resumes: {
    code: "01",
    title: "MY RESUMES",
    subtitle: "我的简历",
  },
  templates: {
    code: "02",
    title: "TEMPLATE LIBRARY",
    subtitle: "简历模板",
  },
  ai: {
    code: "03",
    title: "AI PROVIDERS",
    subtitle: "AI服务商",
  },
  settings: {
    code: "04",
    title: "SYSTEM SETTINGS",
    subtitle: "通用设置",
  },
};

interface PortalPanelProps {
  panel: PortalPanelId;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Terminal-styled shell for the workbench pages.
 *
 * The portal replaces its own scroll container and dialog chrome with the
 * Rhine Lab language: a fixed index bar, a scanline entrance and a single
 * CLOSE affordance. Page content is rendered as-is so every existing feature
 * keeps working.
 */
export default function PortalPanel({ panel, onClose, children }: PortalPanelProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const meta = PANEL_META[panel];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [onClose]);

  return createPortal(
    <div className="portal-panel" role="dialog" aria-modal="true" aria-label={meta.subtitle}>
      <div className="portal-panel__scrim" onClick={onClose} />
      <section className="portal-panel__frame">
        <header className="portal-panel__top">
          <span className="portal-panel__brand">
            RHINE LAB <i>/</i> {meta.title}
          </span>
          <span className="portal-panel__index">
            <b>{meta.code}</b>
            <em>{meta.subtitle}</em>
          </span>
          <button
            type="button"
            className="portal-panel__close"
            onClick={onClose}
            aria-label="关闭面板"
            autoFocus
          >
            CLOSE <span>×</span>
          </button>
        </header>
        <div className="portal-panel__rule">
          <i />
          <span>SESSION AUTHORIZED</span>
        </div>
        <div className="portal-panel__body" ref={bodyRef}>
          <div className="portal-panel__content">{children}</div>
        </div>
        <footer className="portal-panel__foot">
          <span>
            <i className="portal-panel__light" /> CONNECTED
          </span>
          <span>ESC 返回档案阵列</span>
        </footer>
      </section>
    </div>,
    document.body,
  );
}
