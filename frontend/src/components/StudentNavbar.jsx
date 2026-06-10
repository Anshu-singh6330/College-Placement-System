
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, User, LogOut, Menu, X } from 'lucide-react';
import './StudentNavbar.css';

const StudentNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // ya localStorage.removeItem("user")
    alert("Logout Successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">PlacementPortal</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="/dashboard"><Home size={18} /> Dashboard</a>
          </li>

          <li>
            <a href="/companies"><Building2 size={18} /> Companies</a>
          </li>

          <li>
            <a href="/profile"><User size={18} /> Profile</a>
          </li>

          <li className="nav-logout">
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} /> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StudentNavbar;