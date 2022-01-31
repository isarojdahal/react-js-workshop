import React from "react";
import ConfessionList from "../components/ConfessionList";
import AddConfessionPost from "../components/AddConfessionPost";
import useTitle from "../hooks/useTitle";

const Homepage = () => {
  useTitle("Homepage | Confess Note ");
  return (
    <div>
      <AddConfessionPost />
      <ConfessionList />
    </div>
  );
};

export default Homepage;
