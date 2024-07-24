import React from "react";

const TestSteps = () => {
  return (
    <div>
      TestSteps
      <ul>
        <li>
          1.on gpt paste this Pompt:- Write test cases using jest and react
          testing library for a React button component named CustomButton. It
          accepts props: label (string), onClick (function), and style (object).
          Use Jest and React Testing Library. Include tests for clicking the
          button and ensuring it displays the correct label.
        </li>
        <li>
          find component that need to be tested, and Features that can be tested
          in that component:- eg..... Props should be validated, onClick should
          work properly
        </li>
        <li></li>
        <li>
          2.add another prompt in gpt :- Here is my CustomButton component,I
          want to test that components:
        </li>
        <li>3. in gpt - ``` paste component code here ```</li>
        <li>4. answer of gpt</li>
        <li>5.Paste answer code in (App.test.js) file in react.</li>
        <li>6.check proper path of the file in import</li>
        <li>7.in terminal - npm run test </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default TestSteps;
