import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a href="#!" className="brand-logo">
          <i className="material-icons">{icon}</i>
          {title}
        </a>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Drinks",
  icon: "local_bar"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
