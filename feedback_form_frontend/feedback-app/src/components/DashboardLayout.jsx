import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/DashboardLayout.css";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className={location.pathname === "/dashboard" ? "active" : ""}
              >
                Feedback List
              </Link>
            </li>
            {/* Add other links here */}
          </ul>
        </nav>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
};

export default DashboardLayout;
