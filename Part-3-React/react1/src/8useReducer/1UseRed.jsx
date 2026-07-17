import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

export default function Reducer1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Current Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment (+)
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ margin: "0 10px" }}
      >
        Decrement (-)
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset (0)</button>
    </div>
  );
}

// useReducer hook is use to manage complex state management, while useState is use to mangae simple state management
