import React, { useState } from "react";

const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];

export default function ColorPickerInitState() {
  const [color, setColor] = useState("Coral");

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
      <h1>3/9 Initialize State</h1>
      <h2>Selected color: {color}</h2>
      <div>
        {colorNames.map((colorName) => (
          <button
            className="picker-btn picker-btn2"
            onClick={() => setColor(colorName)}
            key={colorName}
          >
            {colorName}
          </button>
        ))}
      </div>
    </div>
  );
}
