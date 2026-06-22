import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";


const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin");
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/feedback");
      const data = await res.json();
      setFeedbacks(data.content || []);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const deleteFeedback = async (id) => {
    try {
      await fetch(`http://localhost:8080/feedback/${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Reviewed" ? "Pending" : "Reviewed";
    try {
      await fetch(
        `http://localhost:8080/feedback/${id}/status?status=${newStatus}`,
        { method: "PUT" }
      );

      if (newStatus === "Reviewed") {
        await fetch(`http://localhost:8080/feedback/${id}/send-email`, {
          method: "POST",
        });
      }

      fetchData();
    } catch (error) {
      console.error("Error updating status or sending email:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin</h2>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => {
          localStorage.removeItem("admin");
          navigate("/admin");
        }}>Logout</button>
      </div>
      <div className="main-content">
        <h2>Feedback Dashboard</h2>
        <table className="feedback-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td>{fb.name}</td>
                <td>{fb.email}</td>
                <td>{fb.message}</td>
                <td>{fb.status}</td>
                <td>
                  <button onClick={() => toggleStatus(fb.id, fb.status)}>
                    Toggle Status
                  </button>
                  <button onClick={() => deleteFeedback(fb.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
