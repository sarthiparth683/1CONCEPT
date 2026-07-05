import React from "react";

function Comp(props) {
  return (
    <div className="welcome-card">
      <li>npm create vite@latest my-app -- --template react-ts</li>
      <li>need to remove ts(type Script)</li>
      <h3>Test component-1</h3>
      <h1>Hello, {props.name} ! </h1>
      <p>Welcome to learning React.</p>
    </div>
  );
}

export default Comp;
