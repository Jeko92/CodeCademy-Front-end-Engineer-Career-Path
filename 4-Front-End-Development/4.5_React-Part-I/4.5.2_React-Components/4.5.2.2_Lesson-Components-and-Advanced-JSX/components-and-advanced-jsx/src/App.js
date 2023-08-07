import React from "react";
import "./App.css";

import MyQuote from "./Components/MyQuote";
import Owl from "./Components/Owl";
import Friend from "./Components/Friend";
import TonightsPlan from "./Components/TonightsPlan";
import SubmitButton from "./Components/Button";

import RedPanda from "./Components/ExampleComponents/RedPanda";
import QuoteMaker from "./Components/ExampleComponents/QuoteMaker";
import TodaysPlan from "./Components/ExampleComponents/TodaysPlan";

function App() {
  return (
    <>
      <QuoteMaker />
      <MyQuote />
      <RedPanda />
      <Owl />
      <Friend />
      <TodaysPlan />
      <TonightsPlan />
      <SubmitButton />
    </>
  );
}

export default App;
