import React from "react";
import "./Navbar.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="nav-left-item"></div>
        <div className="nav-left-item"></div>
      </div>
      <div className="nav-right">
        <div className="nav-right-item">Gmail</div>
        <div className="nav-right-item">Images</div>
        <div className="nav-right-item">
          <AppsIcon />
        </div>
        <div className="nav-right-item">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
