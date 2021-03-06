import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MainNavbar.css";

const TopNav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="TopNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded navbarText navbarSize">
        <Link to="/">
          <img
            src="https://printsalon.pl/images/products/prints/035906=36.png"
            alt="Logo"
            width="36"
            height="36"
            className="navbarCupcake"
          />
        </Link>

        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <Link to="/" className="nav-link text-info navbar__link-desserts">
            Desserts
          </Link>
          <Link
            to="/new-dessert"
            className="nav-link text-info navbar__link-addDesserts"
          >
            Add Dessert
          </Link>
          <Link
            to="/starred"
            className="nav-link text-info navbar__link-favorites"
          >
            <FontAwesomeIcon icon={faStar} className="starred-icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
