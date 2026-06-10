import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <div style={styles.sidebar}>
      <h2>Placement System</h2>

      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/companies" style={styles.link}>Companies</Link>
      <Link to="/applications" style={styles.link}>Applications</Link>
      <Link to="/profile" style={styles.link}>Profile</Link>

      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    background: "#1e1e2f",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  button: {
    marginTop: "20px",
    padding: "8px",
    cursor: "pointer",
  },
};

export default Sidebar;
