import { useLocation, useNavigate } from "@tanstack/react-router";
import { panelForRoute, usePortalNav } from "./portal-nav";

type NavigateTarget =
  | string
  | {
      to: string;
      params?: Record<string, string>;
      search?: Record<string, unknown>;
      hash?: string;
    };

export function useRouter() {
  const navigate = useNavigate();
  const openPanel = usePortalNav();
  const toNavigateOptions = (target: NavigateTarget) =>
    typeof target === "string" ? { to: target } : target;

  return {
    push: (target: NavigateTarget) => {
      // Inside the Rhine Lab portal, dashboard links stay in the console.
      if (openPanel) {
        const panel = panelForRoute(
          typeof target === "string" ? target : target.to,
        );
        if (panel) {
          openPanel(panel);
          return;
        }
      }
      return navigate(toNavigateOptions(target) as any);
    },
    replace: (target: NavigateTarget) =>
      navigate({ ...toNavigateOptions(target), replace: true } as any),
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    refresh: () => window.location.reload()
  };
}

export function usePathname() {
  return useLocation({
    select: (location) => location.pathname
  });
}

export function redirect(to: string): never {
  if (typeof window !== "undefined") {
    window.location.href = to;
  }
  throw new Error(`Redirected to ${to}`);
}

export function notFound(): never {
  throw new Error("Not Found");
}
