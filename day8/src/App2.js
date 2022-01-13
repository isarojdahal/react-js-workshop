import React, { useState } from "react";

const App2 = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      {text}
    </div>
  );
};

export default App2;
