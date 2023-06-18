export interface RouteObject {
  path: string;
  element: React.FC;
  layout: "dashboard" | "website",
  role: string;
  category?: string;
  key?: number | string;
}