// Dependencies
import { FC } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Config
import LAYOUT from "@/config/layout";


const DashboardLayout: FC = () => {
  return (
    <main className={LAYOUT.dashboard_prefix}>
      <Outlet />
    </main>
  )
}

export default DashboardLayout;