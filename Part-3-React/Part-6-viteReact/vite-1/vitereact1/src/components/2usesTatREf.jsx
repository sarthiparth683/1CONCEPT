import React from "react";

const StatRef = () => {
  return (
    <div>
      <h1>useState vs useRef</h1>
      <ol>
        <li>useState</li>
        <li>Value persists through re-renders</li>
        <li>Changing the value triggers a re-render</li>
        <li>
          Perfect for storing information that is required for UI Example : Say
          you want to display count or some data. Storing that data in useState
          makes more sense. Reason being when this value changes, the component
          re-renders and in browser you’ll the latest value being updated
        </li>

        <li>
          Immutable - one must use the state setting function to modify state
          variable
        </li>
        <li></li>
        <li></li>
      </ol>
      <ol>
        <li> useRef</li>
        <li>Value persists through re-renders</li>
        <li> Changing the value does not trigger a re-render</li>
        <li>
          Perfect for storing information that is not required directly for UI
          Example : Maybe some intervalId you have to store . or some
          subscriptionId or some other id you want to store. This value persists
          through re-renders and you might be needing to cleanup stuff during
          unmount/updates.
        </li>
        <li>
          Syntax : Initial Declaration : let someState = useState( initialValue
          ) Return value someState : [ state, setState ] It returns an array
          with two values. state whose value will be the initalValue and
          setState which is a function which updates state value
        </li>
        <li>Mutable : you can modify the current property manually</li>
        <li></li>
        <li></li>
      </ol>
    </div>
  );
};

export default StatRef;
