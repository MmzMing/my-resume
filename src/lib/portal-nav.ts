import { createContext, useContext } from "react";

export type PortalPanelId = "resumes" | "templates" | "ai" | "settings";

/**
 * Set while a terminal panel is open so dashboard links inside reused
 * workbench pages open another panel instead of leaving the portal.
 */
export type PortalNavHandler = ((panel: PortalPanelId) => void) | null;

export const PortalNavContext = createContext<PortalNavHandler>(null);

export function usePortalNav() {
  return useContext(PortalNavContext);
}

/** Map workbench routes to the panel that replaces them. */
export const PANEL_BY_ROUTE: Record<string, PortalPanelId> = {
  "/app/dashboard": "resumes",
  "/app/dashboard/resumes": "resumes",
  "/app/dashboard/templates": "templates",
  "/app/dashboard/ai": "ai",
  "/app/dashboard/settings": "settings",
};

export function panelForRoute(path: string): PortalPanelId | null {
  return PANEL_BY_ROUTE[path.replace(/\/$/, "")] ?? null;
}
