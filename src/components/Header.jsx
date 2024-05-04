import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar bg-dark p-0 border-bottom  ">
      <div className="container">
        <Link className="navbar-brand " to="/">
          <div className="d-flex align-items-center ">
            <h2 className="mx-2">Project</h2>
            <div> Management</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
