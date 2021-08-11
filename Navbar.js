import React from "react";
import BannerImage from "./image/bg-header-desktop.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="Navbar">
        <img className="navbar__background" src={BannerImage} alt="" />
        <div className="container d-flex align-item-center justify-content-center">
          <div className="col-md-10">
            <input className="create__jobInput" type="text" />
          </div>
          <div className="col-md-2 d-flex align-item-center justify-content-center">
            <button className="btn">Create New Listing</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
