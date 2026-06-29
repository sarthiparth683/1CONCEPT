import React from "react";

function WelcomeMessage(props) {
  return (
    <div className="welcome-card">
      <h3>Test component-1</h3>
      <h1>Hello, {props.name} ! </h1>
      <p>Welcome to learning React.</p>
    </div>
  );
}

export default WelcomeMessage;
