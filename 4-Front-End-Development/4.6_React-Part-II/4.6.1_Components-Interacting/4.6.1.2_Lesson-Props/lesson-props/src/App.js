import React from "react";
// import ReactDOM from "react-dom";
import "./App.css";

import PropsDisplayer from "./components/PropsDisplayer";
import Product from "./components/Product";
import Player from "./components/Player";
import Greeting from "./components/Greeting";
import Talker from "./components/Talker";
import List from "./components/List";
import ButtonDefault from "./components/ButtonDefault";

function App() {
  return (
    <>
      <PropsDisplayer myProp="Hello" />
      <Product name="Apple Watch" price={399} rating="4.5/5.0" />
      <div style={{ backgroundColor: "tomato", padding: "1rem" }}>
        <Player songName="Shine on you crazy diamond" artist="Pink Floyd" />
        <span className="material-symbols-outlined"> fast_rewind </span>
        <span className="material-symbols-outlined"> play_circle </span>
        <span className="material-symbols-outlined"> fast_forward </span>
      </div>
      <div>
        <h1>MovieFlix</h1>
        <Greeting name="Alison" signedIn={true} />
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Talker />
      </div>
      <div>
        <List type="Living Musician">
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type="Living Cat Musician">
          <li>Nora the Piano Cat</li>
        </List>
      </div>
      <div>
        <ButtonDefault text="Text passed from parent" />
      </div>
    </>
  );
}

export default App;
