import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  // Returning Another Component
  return (
    <>
      <ProfilePage />
      <Profile />
    </>
  );
}
