import React from "react";
import AddConfessionPost from "../components/AddConfessionPost";
import ConfessionList from "../components/ConfessionList";
import useTitle from "../hooks/useTitle";

const Homepage = () => {
  useTitle("Homepage | Confess Note App");
  return (
    <div>
      <AddConfessionPost />
      <ConfessionList />
    </div>
  );
};

export default Homepage;
