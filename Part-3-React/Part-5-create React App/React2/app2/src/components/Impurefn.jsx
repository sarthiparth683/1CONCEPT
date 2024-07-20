import React from "react";

const Impurefn = () => {
  let count = 0;
  function incrementCount() {
    count += 1;
    // return count;
  }

  return (
    <div>
      <button onClick={incrementCount()}>Count = </button>  {count}
      Impurefn Impure Function Example in JavaScript:- Impure Functions
      Definition: An impure function is one that may produce different outputs
      for the same input or causes side effects. Characteristics:
      Non-Deterministic: The output might vary even with the same inputs. Side
      Effects: The function may modify some external state or depend on external
      variables.
      <b>Side Effects</b>
      Meaning: A side effect is any application state change that is observable
      outside the called function other than its return value. Common side
      effects include modifying a global variable, writing to a database, or
      altering the DOM in a web page. Implications: While not inherently bad,
      side effects, if not managed well, can lead to issues like hard-to-track
      bugs and difficulties in understanding and maintaining code.
    </div>
  );
};

export default Impurefn;
