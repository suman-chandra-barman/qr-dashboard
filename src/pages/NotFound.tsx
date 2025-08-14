import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center px-6 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Sorry, the page you visited does not exist.
      </p>
      <div className="mt-6">
        <Link to="/">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
