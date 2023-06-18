// Dependencies
import { FC } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Config
import LAYOUT from "@/config/layout";


const WebsiteLayout: FC = () => {
  return (
    <main className={LAYOUT.website_prefix}>
      <Outlet />
    </main>
  )
}

export default WebsiteLayout;