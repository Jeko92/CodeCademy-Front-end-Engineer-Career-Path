import React, { useState } from "react";
import styles from "../styles/Input.module.css";

function StudentForm() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [classroom, setClassroom] = useState("");
  const [studentId, setStudentId] = useState("");
  const [lunch, setLunch] = useState("");

  function handleFname(e) {
    setfName(e.target.value);
  }

  function handlelName(e) {
    setlName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleClassroom(e) {
    setClassroom(e.target.value);
  }

  function handleStudentId(e) {
    setStudentId(e.target.value);
  }

  function handleLunch(e) {
    setLunch(e.target.value);
  }

  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Signup form for students</h2>
        <p>
          Please provide information below, in order to register you accordingly
          in our system. receive exclusive discounts, and connect with your
          classmates and school staff.
        </p>
        <form>
          <div className="name">
            <label htmlFor="fName">First Name: </label>
            <input
              id="fName"
              type="text"
              onChange={handleFname}
              value={fName}
            />
            <label htmlFor="lName">First Name: </label>
            <input
              id="lName"
              type="text"
              onChange={handlelName}
              value={lName}
            />
          </div>
          <div className="info">
            <label htmlFor="age">Your Age: </label>
            <input
              id="age"
              type="number"
              onChange={handleAge}
              value={age}
              min={0}
              max={100}
            />
            <label htmlFor="address">Address: </label>
            <input
              id="address"
              type="text"
              onChange={handleAddress}
              value={address}
            />
          </div>
          <div className="registration">
            <label htmlFor="clasroom">Classroom: </label>
            <input
              id="classroom"
              type="text"
              onChange={handleClassroom}
              value={classroom}
            />
            <label htmlFor="studentId">Student ID: </label>
            <input
              id="studentId"
              type="text"
              onChange={handleStudentId}
              value={studentId}
            />
          </div>
          <div className="lunchType">
            <h3>Select Your favourite Lunch</h3>
            <div>
              <input
                type="radio"
                name="lunch1"
                value="Pizza"
                id="lunch1"
                checked={lunch === "Pizza"}
                onChange={handleLunch}
              />
              <label htmlFor="lunch1">Pizza</label>
            </div>

            <div>
              <input
                type="radio"
                name="lunch2"
                value="Salad"
                id="lunch2"
                checked={lunch === "Salad"}
                onChange={handleLunch}
              />
              <label htmlFor="lunch2">Salad</label>
            </div>
            <div>
              <input
                type="radio"
                name="lunch3"
                value="Wrap"
                id="lunch3"
                checked={lunch === "Wrap"}
                onChange={handleLunch}
              />
              <label htmlFor="lunch3">Wrap</label>
            </div>
            <div>
              <input
                type="radio"
                name="lunch4"
                value="Sandwich"
                id="lunch4"
                checked={lunch === "Sandwich"}
                onChange={handleLunch}
              />
              <label htmlFor="lunch4">Sandwich</label>
            </div>
          </div>
        </form>
        <div>
          <h2>
            Please check if information below is correct and confirm to submit
            it:{" "}
          </h2>
          <h4>{fName}</h4>
          <h4>{lName}</h4>
          <h4>{age}</h4>
          <h4>{address}</h4>
          <h4>{classroom}</h4>
          <h4>{studentId}</h4>
          <h4>Lunch: {lunch}</h4>
        </div>
      </div>
    </>
  );
}

export default StudentForm;
