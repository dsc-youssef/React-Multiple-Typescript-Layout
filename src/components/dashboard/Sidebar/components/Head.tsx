// Dependencies
import { FC } from "react";

// logo
import logo from "~/images/global/logo.png";

const Head: FC = () => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-brand">
        <img className="brand-logo" src={logo} alt="" />
        <h3 className="sidebar-brand-name">Point</h3>
      </div>
    </div>
  )
}

export default Head;
