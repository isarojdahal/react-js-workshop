import React, { useState, useReducer } from "react";
import { countReducer } from "./reducers/countReducer";
import {
    COUNT_ACTIONS
} from "./actions/countActions";
const App = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

 
  return (
    <div>
      {state.count}
      <button
        onClick={() =>
          dispatch({
            type: COUNT_ACTIONS.INCREASE_COUNT,
            payloads: { text: "hello" },
          })
        }
      >
        +
      </button>
      <button onClick={() => dispatch({ type: COUNT_ACTIONS.DECREASE_COUNT })}>
        -
      </button>
      <button
        onClick={() => dispatch({ type: COUNT_ACTIONS.INCREASE_COUNT_BY_TWO })}
      >
        +2
      </button>
    </div>
  );
};

export default App;
