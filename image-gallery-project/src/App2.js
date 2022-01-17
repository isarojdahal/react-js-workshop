import React, { useEffect, useLayoutEffect, useState } from "react";

const App2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //componentDidMount
    console.log("use effect hook");
  }, [count]);
  useLayoutEffect(() => {
    //
    console.log("use layout effect");
  }, [count]);
  return (
    <div>
      App2
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App2;
