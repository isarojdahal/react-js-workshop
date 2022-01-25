import ReactDOM from "react-dom";
import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const generateRandomNum = useMemo(() => Math.random() * 10, []);
  console.log("I am rendered from App Component");
  return (
    <>
      {generateRandomNum}
      <br />
      {count}

      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
