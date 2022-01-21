import { COUNT_ACTIONS } from "../actions/countActions";

const countReducer = (state, action) => {
  switch (action.type) {
    case COUNT_ACTIONS.INCREASE_COUNT:
      console.log(action.payloads.text);
      return { count: state.count + 1 };
    case COUNT_ACTIONS.DECREASE_COUNT:
      return { count: state.count - 1 };
    case COUNT_ACTIONS.INCREASE_COUNT_BY_TWO:
      return { count: state.count + 2 };
    default:
      return state;
  }
};

export { countReducer };
