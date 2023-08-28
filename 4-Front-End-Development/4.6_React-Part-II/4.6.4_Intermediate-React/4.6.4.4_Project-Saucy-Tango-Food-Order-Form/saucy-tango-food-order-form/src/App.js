import "./App.css";
import React from "react";
import food1Img from "./assets/img/food1.png";
import food2Img from "./assets/img/food2.png";
import food3Img from "./assets/img/food3.png";
import FoodOrderForm from "./components/FoodOrderForm";
import FoodItem from "./components/FoodItem";
import Header from "./components/Header";

function App() {
  return (
    // <div className="App">
    <div className="container">
      <div>
        <Header />
        <FoodItem name="Shakshuka" price={5.99} imgSrc={food1Img} />
        <FoodItem name="Spaghetti Carbonara" price={6.99} imgSrc={food2Img} />
        <FoodItem name="Margherita Pizza" price={2.99} imgSrc={food3Img} />
        <FoodOrderForm />
      </div>
    </div>
  );
}

export default App;
