// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";


// Config
import LAYOUT from "@/config/layout";

const DashboardLayout: FC = () => {
  return (
    <main className={LAYOUT.dashboard_prefix}>
      <Outlet />
    </main >
  )
}

export default DashboardLayout;