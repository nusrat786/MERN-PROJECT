import React from "react";
import { NavLink } from "react-router-dom";
const Errorpage = () => {
  return (
    <div id="notfound">
      <div className="notfound text-center">
        <h1>404 (Page not found)</h1>
        <button className=" btn btn-warning p-2">
          <NavLink to="/">Back to Home Page</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
