import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="ContentClass" style={{ flexDirection: "column" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/counter">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;