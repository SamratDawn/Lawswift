import { NavLink } from "react-router-dom";
import React from "react";

function ClientHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink extend to="/">
                <button className="btn btn-primary">Sign Out</button>
              </NavLink>
              <p style={{color:'black',marginLeft:'600px'}}>Appointments</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default ClientHeader;
