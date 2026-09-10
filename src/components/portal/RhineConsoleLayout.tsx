import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useLocale } from "@/i18n/compat/client";
import type { PortalPanelId } from "@/lib/portal-nav";
import "./rhine-console.css";

export const CONSOLE_SECTIONS: Array<{
  id: PortalPanelId;
  code: string;
  title: string;
  titleZh: string;
  glyph: string;
  path: string;
}> = [
  {
    id: "resumes",
    code: "01",
    title: "MY RESUMES",
    titleZh: "我的简历",
    glyph: "◫",
    path: "/app/dashboard/resumes",
  },
  {
    id: "templates",
    code: "02",
    title: "TEMPLATE LIBRARY",
    titleZh: "简历模板",
    glyph: "◈",
    path: "/app/dashboard/templates",
  },
  {
    id: "ai",
    code: "03",
    title: "AI PROVIDERS",
    titleZh: "AI服务商",
    glyph: "◉",
    path: "/app/dashboard/ai",
  },
  {
    id: "settings",
    code: "04",
    title: "SYSTEM SETTINGS",
    titleZh: "通用设置",
    glyph: "◷",
    path: "/app/dashboard/settings",
  },
];

interface RhineConsoleLayoutProps {
  section: PortalPanelId;
  children: ReactNode;
}

/**
 * Full-page Rhine Lab workbench shell. Standalone routes replace the old
 * modal panel so the four pages keep portal chrome without covering the 3D console.
 */
export default function RhineConsoleLayout({
  section,
  children,
}: RhineConsoleLayoutProps) {
  const navigate = useNavigate();
  const locale = useLocale();
  const meta = CONSOLE_SECTIONS.find((item) => item.id === section) ?? CONSOLE_SECTIONS[0];

  return (
    <div className="rhine-console">
      <div className="rhine-console__top">
        <button
          type="button"
          className="rhine-console__brand"
          onClick={() => navigate({ to: "/$locale", params: { locale } })}
          title="返回主页"
        >
          <span className="rhine-console__brand-mark">RHINE LAB</span>
          <span className="rhine-console__brand-sub">
            SYNTHESIZE INFORMATION <i>/</i> INTERNAL DATABASE
          </span>
        </button>

        <nav className="rhine-console__nav" aria-label="工作台导航">
          {CONSOLE_SECTIONS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              aria-current={item.id === meta.id ? "page" : undefined}
            >
              <span className="rhine-console__glyph" aria-hidden="true">
                {item.glyph}
              </span>
              {item.title}
              <span className="rhine-console__zh">{item.titleZh}</span>
            </Link>
          ))}
        </nav>
      </div>

      <section className="rhine-console__frame" aria-label={meta.titleZh}>
        <header className="rhine-console__header">
          <span className="rhine-console__header-brand">
            RHINE LAB <i>/</i> {meta.title}
          </span>
          <span className="rhine-console__index">
            <b>{meta.code}</b>
            <em>{meta.titleZh}</em>
          </span>
        </header>
        <div className="rhine-console__rule">
          <i />
          <span>SESSION AUTHORIZED</span>
        </div>
        <div className="rhine-console__body">
          <div className="rhine-console__content">{children}</div>
        </div>
        <footer className="rhine-console__foot">
          <span>
            <i className="rhine-console__light" /> CONNECTED
          </span>
          <span>RHINE LAB OS · WORKBENCH {meta.code}</span>
        </footer>
      </section>
    </div>
  );
}
