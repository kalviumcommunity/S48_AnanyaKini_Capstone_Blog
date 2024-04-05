import React from "react";
import { Link } from "react-router-dom";
import "../../css/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <section className="error-page">
          <div className="center">
            <Link to="/">Go Back Home</Link>
            <h2>Page Not Found</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;