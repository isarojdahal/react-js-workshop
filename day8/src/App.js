import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import App2 from "./App2";
import App3 from "./App3";

function App() {
  // let count = 0;

  const [count, setCount] = useState(0);
  // console.log(useState(20));

  // console.log(useState());
  return (
    <div className="App">
      <App3 />
      {/* {console.log("rendered")}
      {count}
      <br />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);

          setCount(count + 1);
          // console.log(count);
        }}
      >
        Increase
      </button> */}
    </div>
  );
}

export default App;
