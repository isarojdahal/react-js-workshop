import React, { useRef } from "react";

const App2 = () => {
  let inputRef = useRef(null);

  const doSomething = () => {
    // console.log(divRef.current);

    inputRef.current.value = "hello";
    inputRef.current = 1;
    inputRef.current = 2;
    inputRef.current.focus();
    inputRef.current.select();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => doSomething()}>Click</button>
    </div>
  );
};

export default App2;
