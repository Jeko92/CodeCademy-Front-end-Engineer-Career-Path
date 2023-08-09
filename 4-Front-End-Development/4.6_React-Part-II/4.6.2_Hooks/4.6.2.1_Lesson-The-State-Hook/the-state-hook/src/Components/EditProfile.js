import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
  };

  return (
    <form className="edit-profile-form">
      <h1 style={{ color: "#eee" }}>7/9 Objects in State</h1>
      <div>
        <div className="form-data">
          <label htmlFor="fName">First Name:</label>
          <input
            id="fName"
            value={profile.firstName || ""}
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-data">
          <label htmlFor="lName">Last Name:</label>
          <input
            id="lName"
            value={profile.lastName || ""}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-data">
          <label htmlFor="bDay">Pick a Birthday date:</label>
          <input
            id="bDay"
            value={profile.bday || ""}
            type="date"
            name="bday"
            onChange={handleChange}
          />
        </div>
        <div className="form-data">
          <label htmlFor="pswd">Enter Your Password:</label>
          <input
            id="pswd"
            value={profile.password || ""}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="edit-form-submit-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
