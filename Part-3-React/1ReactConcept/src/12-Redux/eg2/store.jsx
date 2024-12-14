import { createStore } from "redux";

const initialState = {
  tasks: [],
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(tasksReducer);
export default store;
