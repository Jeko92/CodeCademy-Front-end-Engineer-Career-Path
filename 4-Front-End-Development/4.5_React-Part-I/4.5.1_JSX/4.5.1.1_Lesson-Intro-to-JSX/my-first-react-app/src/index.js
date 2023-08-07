import "./App.css";
import React from "react";

// eslint-disable-next-line
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const myList = (
  <ul>
    <li>Get back mila</li>
    <li>Finish CodeCademy course</li>
    <li>Aknowledge studies in Germany</li>
    <li>Finish CS50 course form harward and get certified</li>
    <li>Find a job with a perfect benefits and remote possibilities</li>
    <li>Change city and start living with mila</li>
    <li>Be happy and travel a lot</li>
  </ul>
);

root.render(myList);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
