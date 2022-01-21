import React, { useState, useRef } from "react";

const CounterApp = () => {
  let count = 0;
  let countRef = useRef(null);
  console.log(" i am rendered");
  return (
    <div>
      <b ref={countRef}>0</b>
      <br />
      <button
        onClick={() => {
          count++;
          countRef.current.innerText = count;
        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterApp;
