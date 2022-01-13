import React from "react";

const Greet = (props) => {
  console.log(props.data());
  return <div>Greet</div>;
};
export default Greet;
// };

// // Greet.defaultProps = {
// //   hobbies: "Football,Gaming",
// //   name: "Ram",
// // };

// // export default Greet;

// export default class Greet extends React.Component {
//   render() {
//     return (
//       <>
//         {this.props.name}
//         <br />
//         {this.props.nickName}
//       </>
//     );
//   }
// }

// Greet.defaultProps = {
//   name: "ABC",
// };
