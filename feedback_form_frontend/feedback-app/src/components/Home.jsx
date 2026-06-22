import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Avrotech</h1>
      <p>Please submit your feedback or login as admin to manage feedbacks.</p>
      <div className="button-group">
        <Link to="/feedback" className="btn">Go to Feedback Form</Link>
        <Link to="/admin" className="btn btn-dark">Admin Login</Link>
      </div>
    </div>
  );
};

export default Home;
