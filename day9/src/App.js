import React from "react";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   render() {
//     return (
//       <>
//         {this.state.count}

//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase
//         </button>
//       </>
//     );
//   }
// }

export default App;
