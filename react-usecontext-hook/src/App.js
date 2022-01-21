import React, { createContext } from "react";
import Header from "./components/Header";
import { useState } from "react";
let UserContext = createContext(null);
const App = () => {
  const authState = useState();
  let userList = [
    { name: "Sagar", age: 29, location: "Finland" },
    {
      name: "Suraj",
      age: 20,
      location: "Sydney",
    },
  ];

  return (
    <UserContext.Provider value={authState}>
      <Header />
    </UserContext.Provider>
  );
};

export default App;
export { UserContext };
