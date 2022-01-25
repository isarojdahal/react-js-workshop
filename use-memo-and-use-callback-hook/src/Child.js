import React, { memo } from "react";

const Child = () => {
  console.log("I am rendered from Child Component");
  return <div></div>;
};

export default memo(Child);
