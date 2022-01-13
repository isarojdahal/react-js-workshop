import styled from "styled-components";

export const MyButton = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 12px;
  border-radius: 20px;

  &:hover {
    background-color: red;
  }
`;

// const BlueButton = styled.button`
//   color: black;
//   background-color: blue;
//   padding: 12px;
//   border-raidus: 20px;
// `; };
