
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Apply.css";

function Apply() {
  const [resumeLink, setResumeLink] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const companyName =
    location.state?.companyName || "Selected Company";

  const handleApply = (e) => {
    e.preventDefault();

    if (!resumeLink && !file) {
      setMessage("❌ Please provide Resume Link or Upload Resume");
      return;
    }

    if (resumeLink && !resumeLink.startsWith("http")) {
      setMessage("❌ Enter a valid Resume Link");
      return;
    }

    setLoading(true);

    const application = {
      companyName,
      resume: resumeLink || file?.name,
      date: new Date().toLocaleDateString(),
    };

    const existingApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    existingApplications.push(application);

    localStorage.setItem(
      "applications",
      JSON.stringify(existingApplications)
    );

    setTimeout(() => {
      setLoading(false);
      setMessage("✅ Application Submitted Successfully!");

      setResumeLink("");
      setFile(null);

      navigate("/my-applications");
    }, 1000);
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h2>Apply for Job 🚀</h2>

        <div className="company-box">
          <p>
            Applying for: <strong>{companyName}</strong>
          </p>
        </div>

        <form onSubmit={handleApply}>
          <input
            type="text"
            placeholder="Paste Resume Link"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
          />

          <div className="or-text">OR</div>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {message && (
          <p className="message">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Apply;