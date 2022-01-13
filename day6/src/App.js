import React from "react";
// import Header from "./components/Header";
import Greet from "./Greet";

const App = () => {
  return (
    <div>
      <Greet
        data={() => {
          console.log("data");
        }}
      />
      {/* <Header message="Hello" /> */}

      {/* <Greet>hello</Greet>
      
      */}

      {/* <ThemeProvider>
        <App>
          <Homepage />
        </App>
      </ThemeProvider> */}
      {/* <Greet nickName="NA" hobbies={{ key: "value" }} /> */}
    </div>
  );
};

export default App;
