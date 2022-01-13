import React, { useState } from "react";

const App3 = () => {
  const [text, setText] = useState("abc");
  const [visibility, setVisibility] = useState(true);

  const handleToggle = () => {
    if (visibility) {
      setText("");
    } else {
      setText("abc");
    }

    setVisibility(!visibility);
  };
  return (
    <div>
      {text}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default App3;
