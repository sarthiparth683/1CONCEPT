import React from "react";

const Complif = () => {
  return (
    <div>
      <h3>Component life</h3>
      <ol>
        <li>
          Birth (Mount Phase): This is the phase where the component is created
          and rendered on the UI for the first time. It involves initialization
          and mounting processes.
        </li>
        <li>
          Life (Update Phase): This phase occurs when there are changes to the
          component's state or props, which lead to re-rendering. It's a cycle
          that can repeat many times as long as the component is displayed.
        </li>
        <li>
          Death (Unmount Phase): The final phase of a component's lifecycle,
          this is when the component is removed from the UI, allowing for
          cleanup activities.
        </li>
      </ol>
    </div>
  );
};

export default Complif;
