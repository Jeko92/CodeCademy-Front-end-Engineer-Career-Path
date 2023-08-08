import React from "react";
import monkeySelfieImg from "../assets/img/react_photo-monkeyselfie.jpg";
import NavBar from "./NavBar";

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src={monkeySelfieImg} alt="Monkey Slefie" />
    </div>
  );
}

export default ProfilePage;
