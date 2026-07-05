// useReducer hook is use to manage complex state management, while useState is use to mangae simple state management

import React, { useReducer } from "react";

// 1. Define the Initial State
// We put this outside the component so it doesn't get recreated on every render.
const initialState = { count: 0 };

// 2. Create the Reducer Function
// The reducer takes two arguments: the 'current state' and the 'action' we dispatched.
// It acts like a traffic cop, deciding how the state should change based on the action type.
function reducer(state, action) {
  // We use a switch statement to check the action.type
  switch (action.type) {
    case "INCREMENT":
      // If the action is 'INCREMENT', return a new object with the count increased by 1
      return { count: state.count + 1 };

    case "DECREMENT":
      // If the action is 'DECREMENT', return a new object with the count decreased by 1
      return { count: state.count - 1 };

    case "RESET":
      // If the action is 'RESET', put the count back to 0
      return { count: 0 };

    default:
      // Always return the current state by default if the action type isn't recognized
      return state;
  }
}

// 3. The Main Component
export default function Reducer1() {
  // useReducer returns an array with two items (just like useState!):
  // - state: the current data (starts as initialState)
  // - dispatch: the function we use to send actions to our reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Display the current count from our state object */}
      <h2>Current Count: {state.count}</h2>

      {/* 4. Dispatching Actions
        When a button is clicked, we call dispatch() and pass in an action object.
        The object MUST have a 'type' property so the reducer knows what to do.
      */}
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
