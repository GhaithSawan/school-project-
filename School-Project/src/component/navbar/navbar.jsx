import React from "react";
import Sidebar from "./sidebar";
import logo from "../../images/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar px-5v d-flex align-item-end" style={{height:"20vh"}}>
      <div className="sidebar ">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
