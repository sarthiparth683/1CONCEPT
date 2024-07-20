import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.innerHTML = `You clicked ${count} times`;
  });
  useEffect(() => {
    // Side effect logic here
  }, []); // This ensures the effect runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <ul>
        <li>What is the useEffect Hook?</li>
        <li>
          React's useEffect hook allows you to perform side effects in your
          components. Examples of side effects include API calls, manually
          changing the DOM, and subscriptions.
        </li>
        <li>
          {" "}
          Syntax and Usage The basic syntax of useEffect is:
          useEffect(callbackFunction, dependencyArray)
        </li>
        <li>
          callbackFunction: The function where your side effect code will be
          placed. This function is executed after every completed render by
          default.
        </li>
        <li>
          dependencyArray: An optional array that determines when the useEffect
          callback should be re-invoked. If it's empty ([]), the effect runs
          only once after the initial render, mimicking the behavior of
          componentDidMount in class components.
        </li>
      </ul>
    </div>
  );
};

export default UseEffect;
