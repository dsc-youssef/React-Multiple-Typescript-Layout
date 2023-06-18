// Dependencies
import { FC, lazy } from "react";

// Types
import { RouteObject } from "@/interfaces/hooks/Route";

// React Router
import { Routes, Route } from "react-router-dom";

// Hooks
import useRoute from "@/hooks/useRoute";

// Routes
import websiteRoutes from "@/routes/website";

// Layout
const WebsiteLayout = lazy(() => import("./Layout"));


const Website: FC = () => {
  const { validateRoutes } = useRoute();
  const routes = validateRoutes(websiteRoutes, ["global"]);

  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        {
          routes.map((route: RouteObject, key: number) =>
            <Route
              key={key}
              path={route.path}
              element={<route.element />}
            />
          )}
      </Route>
    </Routes>
  )
}

export default Website;