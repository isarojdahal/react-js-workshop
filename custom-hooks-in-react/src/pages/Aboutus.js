import React, { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Aboutus = () => {
  useTitle("About us Title");

  const [isLoading, fetchedData, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
    { method: "GET" }
  );
  return (
    <div>
      {isLoading
        ? "Loading..."
        : fetchedData.length > 0
        ? fetchedData.map((todo, index) => {
            return <div key={index}>{todo.title}</div>;
          })
        : null}

      <br />
      {error && JSON.stringify(error.message)}
    </div>
  );
};

export default Aboutus;
