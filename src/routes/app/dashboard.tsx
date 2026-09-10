import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import RhineConsoleLayout from "@/components/portal/RhineConsoleLayout";
import { PANEL_BY_ROUTE, type PortalPanelId } from "@/lib/portal-nav";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex,nofollow" }]
  }),
  ssr: false,
  component: DashboardRouteLayout
});

function resolveSection(pathname: string): PortalPanelId {
  const normalized = pathname.replace(/\/$/, "");
  return PANEL_BY_ROUTE[normalized] ?? "resumes";
}

function DashboardRouteLayout() {
  const location = useLocation();
  const section = resolveSection(location.pathname);

  return (
    <RhineConsoleLayout section={section}>
      <Outlet />
    </RhineConsoleLayout>
  );
}
