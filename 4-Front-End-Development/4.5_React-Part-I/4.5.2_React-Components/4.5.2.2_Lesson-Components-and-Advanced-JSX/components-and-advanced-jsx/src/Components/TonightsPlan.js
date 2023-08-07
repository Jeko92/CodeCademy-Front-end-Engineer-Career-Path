import React from "react";

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
export default function TonightsPlan() {
  let action = fiftyFifty ? "out" : "to bed";

  return (
    <div>
      <h1>Tonight I'm goig {action} WOOO</h1>
    </div>
  );
}
