import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    //componentDidMount

    console.log("Mycomponent is mounted");

    //cleanup function
    //componentWillUnMount
    return () => {
      console.log("Mycomponent will un mount");
    };
  }, []);
  return <div>Hello</div>;
};

export default MyComponent;
