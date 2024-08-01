import React from "react";

export const Install = () => {
  return (
    <div>
      <ol>
        <li>
          Install Node.js: Ensure you have Node.js and npm installed on your
          computer. You can check your current node and npm version by node - v;
        </li>
        <li>vite installation</li>
        <li>
          1.npm create vite@latest . -- --template react ------------- This
          command will set up a new Vite React project in the current directory.
          OR
        </li>
        <li>npm create vite@latest vitereact1 -- --template react </li>
        <li>cd folder name</li>
        <li>cd .. to go back</li>
        <li>2.npm install- for installing node modules,Dependencies.</li>
        <li>cd folder name Navigate to Your Project:</li>
        <li>cd .. to go back</li>
        <li>3.npm run dev - to start the app</li>
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
