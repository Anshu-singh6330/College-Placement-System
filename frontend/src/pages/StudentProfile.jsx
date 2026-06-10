 import { useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [student, setStudent] = useState({
    name: "Anshu Singh",
    email: "anshu@gmail.com",
    phone: "9876543210",
    course: "B.Tech CSE",
    skill: "full stack developer",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>

      <div className="profile-card">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={student.email}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={student.phone}
          disabled={!isEditing}
          onChange={handleChange}
        />

        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={student.course}
          disabled={!isEditing}
          onChange={handleChange}
        />

         <label>skill:</label>
        <input
          type="text"
          name="skill"
          value={student.skill}
          disabled={!isEditing}
          onChange={handleChange}
        />

        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </div>
    </div>
  );
}

export default StudentProfile;

