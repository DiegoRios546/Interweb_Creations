import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Pictures/img7.png";
import user from "../src/Pictures/img6.png";
import './Navbar.css'; 

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand d-flex align-items-center" to="/">
                <img
                  src={logo}
                  className="img-fluid col-lg-1 header-img mr-3"
                  alt="HomeImg"
                />
                <span className="navbar-text">Interweb Creations</span>
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/service">
                    ¿Quiénes somos?
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      Nuestros Servicios
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contáctanos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Iniciar sesion
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <div className="user-menu-button">
                        <span className="user-name">Diego Rios</span>
                        <img src={user} alt="User Avatar" className="user-avatar" />
                        
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
