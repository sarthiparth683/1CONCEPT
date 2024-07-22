import React from "react";

const notes = () => {
  return (
    <div>
      <ol>
        <li>vite installation</li>
        <li>refer documentation because it may change</li>
        <li>
          1.Install Node.js: Ensure you have Node.js and npm installed on your
          computer. You can check your current node and npm version by node - v;
        </li>
        <li>
          2. npm create vite@latest vitereact1 -- --template react ((npm create
          vite@latest . -- --template react ------------- This command will set
          up a new Vite React project in the current directory.))
        </li>
        <li>2.cd folder name Navigate to Your Project:</li>
        <li>2.cd .. to go back</li>
        <li>Install Dependencies: npm install</li>
        <li>npm run dev - to start the app</li>
        <li></li>
        <li></li>
      </ol>

      <ol>
        <li>
          <b>Hoisting on other devices in vite</b>
        </li>
        <li>
          in packaage.json file - need to change - "dev": "vite", into
          -------this - "scripts": "dev": "vite --host",
        </li>
      </ol>

      <ol>
        <li>Good Conventions for writing code</li>
        <li>Use PascalCase in components: eg. function TodoItem()</li>
        <li>
          Use camelCase for JavaScript data types like variables, arrays,
          objects, functions, etc.
        </li>
        <li>
          Use camelCase for folder and non-component file names and PascalCase
          for component file names
        </li>
      </ol>
    </div>
  );
};

export default notes;
