import "./App.css";
import React from "react";

// Component imports
import Tasks from "./Components/Presentational/Tasks";
import ColorPicker from "./Components/ColorPicker";
import ColorPickerInitState from "./Components/ColorPickerInitState";
import PhoneNumber from "./Components/PhoneNumber";
import QuizNavBar from "./Components/QuizNavbar";
import { questions } from "./Components/DataModel";
import GroceryCart from "./Components/GroceryCart";
import EditProfile from "./Components/EditProfile";
import {
  Musical,
  MusicalRefactored,
} from "./Components/Presentational/Musical";
import BetterTasks from "./Components/Presentational/BetterTasks";

export default function App() {
  return (
    <main>
      <Tasks />
      <ColorPicker />
      <ColorPickerInitState />
      <PhoneNumber />
      <QuizNavBar questions={questions} />
      <GroceryCart />
      <EditProfile />
      <div className="separate-hoooks">
        <h1>8/9 Separate Hooks for Separate States</h1>
        <Musical />
        <MusicalRefactored />
      </div>
      <BetterTasks />
    </main>
  );
}
