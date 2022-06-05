import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
<div className="navbar bg-neutral">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
    <Link className="btn btn-ghost normal-case text-xl" to="/YourDay">Your Day</Link>
    <Link className="btn btn-ghost normal-case text-xl" to="/Dashboard">Dashboard</Link>
    <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
  );
}

export default Navbar;
