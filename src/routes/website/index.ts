// Dependencies
import { lazy } from "react";

// Types
import { RouteObject } from "@/interfaces/hooks/Route";

// Pages
const Welcome = lazy(() => import("@/pages/website/Welcome"));

const websiteRoutes: RouteObject[] = [
  {
    path: "",
    layout: "website",
    role: "global",
    category: "",
    key: "",
    element: Welcome
  }
]

export default websiteRoutes;