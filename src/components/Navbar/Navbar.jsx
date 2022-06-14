import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";


export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="text-light nav-link" to="/">
            <h1 className="navbar-brand" >SuperTiendaCELL</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/categoria/motorola">
                  Motorola
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/categoria/samsung">
                  Samsung
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/categoria/apple">
                  Apple
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
            </div>
          </div>
        </div>
      </nav>  
    </>

  )
}







