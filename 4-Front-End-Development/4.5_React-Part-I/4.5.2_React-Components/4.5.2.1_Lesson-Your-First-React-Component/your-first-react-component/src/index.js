// 2/10 Import React
import React from "react";
// 3/10 Import ReactDOM
import ReactDOM from "react-dom/client";
import { App, MyComponent, MySecondComponent } from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* 1/10 React Components */}
    <App />
    <MyComponent />
    <MySecondComponent />
    {/* 9/10 Using and Rendering a Component */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
