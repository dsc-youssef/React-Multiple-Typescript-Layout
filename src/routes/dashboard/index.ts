// Dependencies
import { lazy } from "react";

// Types
import { RouteObject } from "@/interfaces/hooks/Route";

// Pages
const Welcome = lazy(() => import("@/pages/dashboard/Welcome"));

const dashboardRoutes: RouteObject[] = [
  {
    path: "",
    layout: "dashboard",
    role: "global",
    category: "",
    key: "",
    element: Welcome
  }
]

export default dashboardRoutes;