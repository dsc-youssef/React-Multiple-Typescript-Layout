// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";


// Config
import LAYOUT from "@/config/layout";

// Default Components
const Sidebar = lazy(() => import("@/components/dashboard/Sidebar"));

const DashboardLayout: FC = () => {
  return (
    <main className={LAYOUT.dashboard_prefix}>
      <Row className="m-0 p-0">
        <Col className="flex">
          <Sidebar />
          <div className="w-full">
            <header>Header</header>
            <Outlet />
          </div>
        </Col>
      </Row >
    </main >
  )
}

export default DashboardLayout;