import React, { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import { useBattery } from "react-use";
import { useGeolocation } from "react-use";

const Homepage = () => {
  useTitle("Homepage");
  const state = useGeolocation();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

export default Homepage;
