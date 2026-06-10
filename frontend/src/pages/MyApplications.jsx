import { useEffect, useState } from "react";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(data);
  }, []);

  return (
    <div className="page">
      <h1 className="heading">My Applications</h1>

      {applications.length === 0 ? (
        <div className="empty">
          <h2>No Applications Found 🚫</h2>
        </div>
      ) : (
        <div className="wrapper">
          {applications.map((app, index) => (
            <div key={index} className="card">
              <div className="leftBorder"></div>

              <div className="content">
                <div className="top">
                  <h2>{app.companyName}</h2>

                  <span className="tag">Applied</span>
                </div>

                <div className="details">
                  <p>
                    <strong>Resume:</strong> {app.resume}
                  </p>

                  <p>
                    <strong>Date:</strong> {app.date}
                  </p>
                </div>

                <button className="button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyApplications;
