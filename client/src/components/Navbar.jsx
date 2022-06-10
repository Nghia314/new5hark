import React from "react";
import { Link } from "react-router-dom";

import Security from "../utils/security";

function Navbar() {
  if (Security.loggedIn) {
    return (
      <div className="navbar bg-neutral">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          {Security.loggedIn() ? (
            <>
              <Link
                className="btn btn-ghost normal-case text-xl"
                to="/Dashboard"
              >
                Dashboard
              </Link>
              <Link
                className="btn btn-ghost normal-case text-xl"
                to="/"
                onClick={Security.logout}
              >
                Logout
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
