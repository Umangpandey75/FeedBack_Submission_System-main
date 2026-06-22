import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (id === "pass@123" && password === "Pass@12345") {
      localStorage.setItem("admin", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form onSubmit={login} className="form">
        <input
          className="input"
          placeholder="Admin ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          autoFocus
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
