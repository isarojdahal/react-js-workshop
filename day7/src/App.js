import React from "react";
// import { FaTrash, FaChrome, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import {
  RedButton,
  BlueButton,
  MyButton,
} from "./components/styles/Button.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import { Globals } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";
import { HeaderStyle } from "./components/styles/Header.styled";
import { MyTheme } from "./Theme";
const App = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <Globals />

      <HeaderStyle>Hello there</HeaderStyle>
      <h1>
        React jS
        <p>Hello</p>
      </h1>
    </ThemeProvider>

    // </StyledContainer>
  );
};

export default App;
