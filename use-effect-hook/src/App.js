import React, { useEffect, useState } from "react";
import MyComponent from "./MyComponent";
import axios from "axios";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    //componentDidMount

    window.addEventListener("click", abc);
    // fetch(`http://numbersapi.com/${count}`,)
    //   .then((response) => response.text())
    //   .then((data) => setText(data));

    axios
      .get(`http://numbersapi.com/${count}`)
      .then((response) => setText(response.data));

    //cleanup function
    //componentWillUnMount
    return () => {
      //
      window.removeEventListener("click", abc);
      console.log("component will un mount");
    };
  }, [count]);

  return (
    <div>
      {text}

      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default App;
