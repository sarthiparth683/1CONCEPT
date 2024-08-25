import React from "react";

const Notes = () => {
  return (
    <div>
      <ol>
        <li>
          <h1>Vite-installation</h1>
        </li>
        <li>node - v -check node version if not then install node</li>
        <li>npm create vite@latest . -- --template react -</li>
        <li>cd folder name or cd .. to go back</li>
        <li>npm install- for installing node modules,Dependencies.</li>
        <li>npm run dev - to start the app</li>
      </ol>

      <ol>
        <li>Hoisting on other devices in vite...</li>
        <li>
          in packaage.json file - need to change -"scripts": "dev": "vite
          --host",
        </li>
      </ol>

      <ol>
        <li>
          <h1>React App installation:-</h1>
        </li>
        <li>1.Node install latest version - then check version - node -v</li>
        <li>
          2.npm install -g npm - is used to update the globally installed
          version of npm (Node Package Manager) to the latest version.
        </li>
        <li>
          3.npx create-react-app . - dot is for same directory or you can use
          npx create-react-app (appName)
        </li>
        <li>** BEFORE STARTING CHECK RIGHT DIRECTORY</li>
        <li>cd (subdirectory_name) - to go to that particular directory.</li>
        <li>cd .. to move back</li>
        <li>4.FINAL- npm start - Starts the development server.</li>
      </ol>
    </div>
  );
};

export default Notes;
