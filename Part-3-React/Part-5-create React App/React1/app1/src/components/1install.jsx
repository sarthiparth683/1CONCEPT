import React from "react";

const Notes = () => {
  return (
    <div>
      <ol>
        <li>
          <h3>Steps to setup React App:-</h3>
        </li>
        <li>
          before installing React - check for latest version of Node and install
          it
        </li>
        <li>1.node -v -to check for latest version of node</li>
        <li>
          2.npm install -g npm - is used to update the globally installed
          version of npm (Node Package Manager) to the latest version.
        </li>
        <li>
          npx create-react-app . - dot is for same directory or you can use npx
          create-react-app (appName)
        </li>
        <li>** BEFORE STARTING CHECK RIGHT DIRECTORY</li>
        <li>cd (subdirectory_name) - to go to that particular directory.</li>
        <li>cd .. to move back</li>
        <li>FINAL- npm start - Starts the development server.</li>
      </ol>
      <ol>
        <li>
          <h3>React lifecycle</h3>
        </li>
        <li>mounting - birth</li>
        <li>updating - life</li>
        <li>unmounting - death</li>
        <li></li>
      </ol>
      <ul>
        <li>Side effects are caused by impure functions.</li>
        <li></li>
        <li>Pure functions :- same input, same output </li>
        <li>Impure functions :- same input may or may not be same output</li>
        <li></li>
        <li>useEffect help us to keep our function pure</li>
        <li></li>
        <li></li>
      </ul>
      <ol>
        <li>
          <b>Axios</b>
        </li>
        <li> npm i axios - to use axios</li>
        <li>them import axios from 'axios'</li>
        <li></li>
        <li></li>
      </ol>
      <ol>
        <li>3-situations when your component is render</li>
        <li>when parent is rendering</li>
        <li>when props are changing</li>
        <li>when states are changing</li>
        <li></li>
      </ol>
      <ol>
        <li>useEffect Type</li>
        <li>without dependecies[] </li>
        <li>In mounting</li>
        <li>state changes/components render</li>
        {/* <li>useEffect(()=>{})</li> */}
        <li></li>
        <li>with dependecies[] </li>
        <i>in mounting</i>
        {/* <li>useEffect(()=>{},[state])</li> */}
        <li></li>
        {/* <li>useEffect(()=>{opearationretutn ()=>{}},[]) </li> */}
        <li></li>
        {/* <li>==> cleanup function of useEffect.</li> */}
        <li></li>
      </ol>
    </div>
  );
};

export default Notes;
