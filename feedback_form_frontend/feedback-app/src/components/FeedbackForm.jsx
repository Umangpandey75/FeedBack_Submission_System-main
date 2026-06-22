import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FeedbackForm.css";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin") === "true";
    if (isAdmin) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (res.ok) {
        setMsg("Feedback submitted successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setMsg(result.message || "Submission failed.");
      }
    } catch {
      setMsg("Network error. Please try again later.");
    }
  };

  return (
    <div className="container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoFocus
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input"
        />
        <textarea
          placeholder="Message"
          required
          minLength={10}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="textarea"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {msg && <p className="message">{msg}</p>}
    </div>
  );
};

export default FeedbackForm;
