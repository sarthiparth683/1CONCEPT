import React from "react";

const Notes = () => {
  return (
    <div>
      <b>Notes</b>
      <ol>
        <li>steps to install react app</li>
        <li>npx create-react-app . - dot is for same directory or folder</li>
        <li>npx create-react-app (appName)</li>
        <li>npm start or npm run start - both is to start react app </li>
        <li>then create component and use rafce</li>
        <li>
          whatever we install we see in package.json file eg.axios,json-server
          etc..
        </li>
        <li>-------------------------------------------</li>
      </ol>
      <ol>
        <li>Axios installation</li>
        <li>got to axios documentation</li>
        <li>npm i axios </li>
        <li>npm run build</li>
      </ol>
      <ol>
        <li>json server to create our own server</li>
        <li>1st create db.json file with some data in it.</li>
        <li></li>
        <li></li>
        <li>JSON steps</li>
        <li>npm install json-server (1st command to install db.json file)</li>
        <li>create db.json - file manually created in same foler</li>
        <li>
          npx json-server --watch db.json --port 8080 - to run json server
        </li>
        <li>
          npx json-server --watch db.json --port 8585 (give any port number)
        </li>
        <li>to see result - don't close terminal</li>
        <li></li>
        <li>--------------------------------------------</li>
        <li>
          {" "}
          <b>in React running json server</b>{" "}
        </li>
        <li>
          npm install -g json-server - 1st- need to install json server
          Globally:
        </li>
        <li>
          json-server --watch db.json --port 8081 - 2nd step to run in react
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>npm run build</li>
      </ol>
    </div>
  );
};

export default Notes;
