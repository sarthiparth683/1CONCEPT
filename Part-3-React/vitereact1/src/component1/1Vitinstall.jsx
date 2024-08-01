import React from "react";

export const Install = () => {
  return (
    <div>
      <ol>
        <li>
          Install Node.js: Ensure you have Node.js current node version - node -
          v;
        </li>
        <li>
          <b>vite installation</b>
        </li>
        <li>npm create vite@latest . -- --template react -</li>
        <li>cd folder name or cd .. to go back</li>
        <li>npm install- for installing node modules,Dependencies.</li>
        <li>npm run dev - to start the app</li>
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
    </div>
  );
};
