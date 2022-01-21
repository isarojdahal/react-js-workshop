import TODO_ACTIONS from "../actions/todoAction";

const todoReducer = (state, action) => {
  let newTodo;
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      newTodo = [
        ...state,
        {
          data: action.payloads.text,
          date: new Date().toLocaleString().split(",")[0],
          isCompleted: false,
        },
      ];

      action.payloads.setText("");
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;

    case TODO_ACTIONS.TOGGLE_TODO:
      newTodo = state.map((todo, index) =>
        index === action.payloads.index
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;

    case TODO_ACTIONS.DELETE_TODO:
      const response = window.confirm("Do you want to delete ? ");

      if (response) {
        newTodo = state.filter((_, index) =>
          index === action.payloads.index ? false : true
        );

        localStorage.setItem("todos", JSON.stringify(newTodo));
        return newTodo;
      }
      return state;

    default:
      return state;
  }
}; //end of reducer function

export default todoReducer;
