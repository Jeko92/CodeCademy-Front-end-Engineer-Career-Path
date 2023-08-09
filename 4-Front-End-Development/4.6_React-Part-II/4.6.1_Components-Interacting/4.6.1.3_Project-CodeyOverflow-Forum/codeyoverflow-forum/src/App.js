import "./App.css";
import React from "react";
import { comments } from "./components/commentData";
import Card from "./components/Card";

// console.log(comments[0].profileImg);

function App() {
  return comments.map((comment, i) => <Card key={i} commentObject={comment} />);
}

export default App;
