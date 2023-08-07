import React from "react";
import john from "./assets/img/john.png";
import goose from "./assets/img/react_photo-goose.jpg";
import puppy from "./assets/img/react_photo-puppy.jpeg";
import kittyImg from "./assets/img/react_photo-kitty.jpg";
import "./App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 1/16 class vs className
const bigDiv = <div className="app big">I AM A BIG DIV</div>;

// 2/16 Self-Closing Tags
const profile = (
  <div className="self-closing-tags">
    <h1>John Smith</h1>
    <img src={john} alt="John Smith" className="john-smith" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />I specialize in creating React applications.
    </article>
  </div>
);

// 3/16 JavaScript In Your JSX In Your JavaScript
const calculation = (
  <h3 style={{ backgroundColor: "cyan", padding: "1rem" }}>
    Const calculation provides following result: {2 + 3}
  </h3>
);

// 4/16 Curly Braces in JSX
const withoutBraces = (
  <h3 style={{ backgroundColor: "tomato", padding: "1rem" }}>
    following will interpreted as string: 2 + 3
  </h3>
);
const withBraces = (
  <h3 style={{ backgroundColor: "darkgreen", padding: "1rem" }}>
    if we add braces it will be evaluated: {2 + 3}
  </h3>
);

// 5/16 20 Digits of Pi in JSX
const math = <h1>2 + 3 = {2 + 3}</h1>;
const pi = (
  <div>
    <h1>PI, YALL!</h1>
    <p>{Math.PI.toFixed(20)}</p>
    <div>{math}</div>
  </div>
);

// 6/16 Variables in JSX
const theBestString = "This text was accessed through a javascript variable";

// 7/16 Variable Attributes in JSX
const gooseSrc = goose;
const styles = { display: "block", height: "300px", margin: "0 auto" };

const gooseImg = (
  <img src={gooseSrc} alt="Goose swimming into lake" style={styles} />
);

// 8/16 Event Listeners in JSX
function makePuppy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute("src", puppy);
  e.target.setAttribute("alt", "doggy");
}

const kitty = (
  <div>
    <h3>
      Click on the image below <span className="arrow-flow">&darr;</span> to
      turn it into puppy img{" "}
    </h3>
    <img
      src={kittyImg}
      alt="kitty"
      onClick={makePuppy}
      className="make-puppy"
    />
  </div>
);

// 9/16 JSX Conditionals: If Statements That Don't Work
const CodeExample = () => {
  const codeSnippet = `
  (
    <h1>
      {
        if (purchase.complete) {
          'Thank you for placing an order!'
        }
      }
    </h1>
  )
  `;

  return (
    <div>
      <SyntaxHighlighter language="jsx" style={materialDark}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

// 10/16 JSX Conditionals: If Statements That Do Work
const pics = [kittyImg, puppy];

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? "heads" : "tails";
}

let img;

// if/else statement begins here:
if (coinToss() === "heads") {
  img = <img className="make-puppy" src={pics[0]} alt="kitty" />;
} else {
  img = <img className="make-puppy" src={pics[1]} alt="puppy" />;
}

// 11/16 JSX Conditionals: The Ternary Operator
const imgTernary = (
  <img
    src={pics[coinToss() === "heads" ? 0 : 1]}
    alt="kitty-puppy dilemma"
    className="make-puppy"
  />
);

// 12/16 JSX Conditionals: &&
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;
const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

// 13/16 .map in JSX
const people = ["Rowe", "Prevost", "Gare"];

const peopleList = people.map((person, i) => (
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
));

// 14/16 Keys
const peopleList1 = people.map((person, i) => (
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
));

// 15/16 React.createElement
const greatestDivEver = React.createElement(
  "div",
  { id: "greatestDivEver" },
  "I am greatestDivEver"
);

function App() {
  return (
    <>
      {/* 1/16 class vs className */}
      {bigDiv}
      {/* 2/16 Self-Closing Tags */}
      {profile}
      {/* 3/16 JavaScript In Your JSX In Your JavaScript */}
      {calculation}
      {/* 4/16 Curly Braces in JSX */}
      <div>
        {withoutBraces}
        {withBraces}
      </div>
      {/* 5/16 20 Digits of Pi in JSX */}
      {pi}
      {/* 6/16 Variables in JSX */}
      {theBestString}
      {/* 7/16 Variable Attributes in JSX */}
      {gooseImg}
      {/* 8/16 Event Listeners in JSX */}
      {kitty}
      {/* 9/16 JSX Conditionals: If Statements That Don't Work */}
      <div className="codesnippet">
        <h3>
          The code below <span className="arrow-flow">&darr;</span>will not work
          in React
        </h3>
        <CodeExample />
      </div>
      {/* 10/16 JSX Conditionals: If Statements That Do Work */}
      {img}
      {/* 11/16 JSX Conditionals: The Ternary Operator */}
      {imgTernary}
      {/* 12/16 JSX Conditionals: && */}
      {favoriteFoods}
      {/* 13/16 .map in JSX */}
      <ul>
        <li>Down is the generated PeopleList</li>
        {peopleList}
      </ul>
      {/* 14/16 Keys */}
      <ul>
        <li>Down is the generated PeopleList with keys</li>
        {peopleList1}
      </ul>
      {/* 15/16 React.createElement */}
      {greatestDivEver}
    </>
  );
}

export default App;
