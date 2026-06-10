
import React, { useState } from "react"
import "./Login.css";
import { Link } from  "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    alert("Login Successful ✅");
    navigate("/dashboard");
  } catch (error) {
    alert("Login Failed ❌");
    console.log(error);
  }
};
  return (
    <>
      <div className="login-container">

        {/* Left Section */}
        <div className="left-section">

          <h1 className="title">UNIVERSITY PLACEMENT CELL PORTAL <br/> Campus to Corporate Pipeline </h1>
          

          <div className="feature-row">
            <div className="feature-card">
              <h3>Student Profiles</h3>
            </div>

            <div className="feature-card">
              <h3>Recruiter Dashboard</h3>
            </div>

            <div className="feature-card">
              <h3>Interview Scheduling</h3>
            </div>

            <div className="feature-card">
              <h3>Placement Insights</h3>
            </div>
          </div>

          <div className="stats-card">
            <h2>Placement Statistics 2026</h2>

            <div className="stats">
              <div>
                <h3>1250+</h3>
                <p>Total Offers</p>
              </div>

              <div>
                <h3>Top Sectors</h3>
                <p>IT, Finance, Consulting</p>
              </div>

              <div>
                <h3>8.5 LPA</h3>
                <p>Avg. Package</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className="right-section">

          <div className="login-box">
            <h2>Login</h2>
            <p>College Placement System</p>

            <input
              type="email"
              placeholder="Enter Email"
              value ={email}
              onChange={(e) =>
                setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>

            <p className="register-link">
              New User? <Link to ="/register">Register Here</Link>
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 College Placement Management System |
          Developed by Anshu Singh
        </p>
      </footer>
    </>
  );
}

export default Login;
