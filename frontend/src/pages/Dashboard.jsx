import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header-section">
        <h2>Student Dashboard</h2>
        <p>Welcome to College Placement System</p>
      </div>

      <div className="stats-grid">
        <Link to="/companies" className="stat-card blue">
          <div className="card-icon">🏢</div>
          <div className="card-info">
            <h3>Companies</h3>
            <p>Explore opportunities</p>
          </div>
        </Link>

        <Link to="/application" className="stat-card green">
          <div className="card-icon">📄</div>
          <div className="card-info">
            <h3>My Applications</h3>
            <p>Track your status</p>
          </div>
        </Link>

        <Link to="/profile" className="stat-card purple">
          <div className="card-icon">👤</div>
          <div className="card-info">
            <h3>Profile</h3>
            <p>Update your resume</p>
          </div>
        </Link>

        <div className="overview">
          <h2>Overview at a Glance</h2>
          <div className="stat-box">
          
            <p>Available Jobs</p>
          </div>

          <div className="stat-box">
            <h3>05</h3>
            <p>Application Sent</p>
          </div>

          <div className="stat-box">
            <h3>03</h3>
            <p>Interviews Schedule</p>
          </div>

          <div className="stat-box">
            <h3>01</h3>
            <p>Offers Received</p>
          </div>

          <div className="announcements">
            <h2>Latest Announcements</h2>

            <ul>
              <li>TCS is hiring for Software Developer role.</li>
              <li>Infosys application are now open.</li>
              <li>Wipro placement drive on 15 june.</li>
              <li>Infotech placement drive is on 25 june.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;