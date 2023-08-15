import "./App.css";
import PageTitle from "./componnets/Intro";
import Counter from "./componnets/Counter";
import Counter1 from "./componnets/CounterWithCleanup";
import Timer from "./componnets/Timer";
import Forecast from "./componnets/Forecast";

function App() {
  return (
    <div className="App">
      <PageTitle />
      <div id="counter-div">
        <Counter />
        <p id="counter-output"></p>
      </div>
      <Counter1 />
      <Timer />
      <Forecast />
    </div>
  );
}

export default App;
