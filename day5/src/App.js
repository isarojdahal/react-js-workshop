// import ContactUs from "./pages/ContactUs";

import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    // componentDidMount
    console.log("component is mounted");
    window.addEventListener("");

    return () => {
      // cleanup;
      //componentWillUnMount
      window.removeEventListener();

      console.log("");
    };
  }, []);
  return <p>App</p>;
}

// import React from "react";
// class App extends React.Component {
//   render() {
//     console.log("render is done");
//     return <b>App Class Component</b>;
//   }
//   constructor() {
//     super();
//     console.log("constructor is called");
//   }

//   componentDidMount() {
//     console.log("component is attached to our DOM");
//   }

//   componentDidUpdate() {
//     console.log("");
//   }
// }

// export default App;
