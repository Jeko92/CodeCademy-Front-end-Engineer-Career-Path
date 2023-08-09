// import the default export and the named export `useState` from the 'react' library
import React, { useState } from "react";

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState("Tomato");
  const divStyle = { backgroundColor: color };

  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...divStyle,
      }}
    >
      <h1>2/9 Update Function Component State</h1>
      <h2>The color is {color}</h2>
      <div>
        <button className="picker-btn" onClick={() => setColor("Aquamarine")}>
          Aquamarine
        </button>
        <button className="picker-btn" onClick={() => setColor("BlueViolet")}>
          BlueViolet
        </button>
        <button className="picker-btn" onClick={() => setColor("Tomato")}>
          Tomato
        </button>
        <button
          className="picker-btn"
          onClick={() => setColor("CornflowerBlue")}
        >
          CornflowerBlue
        </button>
      </div>
    </div>
  );
}
