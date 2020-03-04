import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <Link
      to="/"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go Back
    </Link>
  </div>
);

export default NotFound;
