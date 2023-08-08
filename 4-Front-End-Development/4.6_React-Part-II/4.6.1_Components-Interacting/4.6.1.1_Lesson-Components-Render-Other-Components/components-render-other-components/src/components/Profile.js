import octopusImg from "../assets/img/react_photo-octopus.jpg";
import React from "react";

function Picture() {
  return <img src={octopusImg} alt="Octopus at the bottom of ocean" />;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
      <h2>Class: Cephalopoda</h2>
    </>
  );
}

export default Profile;
