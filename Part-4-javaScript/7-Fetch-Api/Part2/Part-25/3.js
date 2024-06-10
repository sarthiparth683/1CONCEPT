
//---------------------------------------------------------------
// Node:
// Introduction
// Node.js is a runtime environment that enables the execution of JavaScript outside of web browsers. It allows developers to run JavaScript on the server-side, extending its capabilities beyond client-side scripting.
//---------------------------------------------------------------
// Detailed Explanation
// A tool that lets you use JavaScript outside of web browsers. So basically NodeJS is a runtime environment that allows you to run JavaScript on the server-side. Before Node.js, JavaScript could only be run in the browser, which is client-side.

// Server-side: This is where your website's data is stored, and it's where things happen behind the scenes, on the servers that host your website.
// Client-side: This is what happens locally on your own computer, in your web browser.
// So, Node.js extended the capabilities of JavaScript to be used outside of the browser, allowing developers to use JavaScript to write server-side code.
//---------------------------------------------------------------
// Node Environment & ( NPM ) Node Package Manager
// The Node environment refers to the ecosystem or the set of tools and libraries that Node.js provides to developers. If you are using Node.js and its tools to develop your application. It means you are working in node environment.

// Here are some key concepts related to the Node environment:

// Core Modules
// NPM ( Node Package Manager )
// Event Loop
// Command Line Interface
// Core Modules: Built-in tools and functions that Node provides. For example, tools to read and write files, manage paths, or make network requests.

// NPM ( Node Package Manager ): This is a tool that comes with Node.js when you install it. It allows you to easily use external libraries and packages in your Node.js applications, which can save you a lot of time and effort.

// package.json
// The package.json file is like a manifest or a list of details about your project. It contains metadata like the project's name, version, and description. Most importantly, it lists the packages (and their specific versions) that your project depends on.

// Key Points:

// Dependencies: When you install a package and save it, the package name and its version are added to the dependencies section.
// Dev Dependencies: If you install a package that's only needed during development (like a testing library), it's added to the devDependencies section using npm install <package-name> --save-dev
// node_modules :
// When you install packages using npm, they are downloaded and stored in a directory called node_modules. This directory contains all the code for the packages you've installed, as well as their dependencies (other packages that they rely on to work).

// Local vs Global : Packages can be installed locally (specific to a project) or globally (available to all projects on your computer). Local packages go into the node_modules folder inside your project directory.

// Avoid Versioning : Typically, you don't include the node_modules directory in version control (like git). Instead, you use the package.json to keep track of which packages your project needs.

// Event Loop: Node.js is designed to be non-blocking and asynchronous. This means that it can perform many operations at the same time without having to wait for one to finish before starting another. The event loop is a mechanism that enables this behavior, allowing Node.js to be very efficient.

// Command Line Interface (CLI): Using the command line, you can start, stop, or manage your Node applications.
//---------------------------------------------------------------
// Code Implementation | Examples
// Showcase the use of core modules for file operations or network requests.
// Introduce NPM and its role in managing external libraries and packages.
// Generate mock data :
// Mockaroo - Random Data Generator and API Mocking Tool | JSON / CSV / SQL / Excel

// Json server :
// GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)

// Setup a server for all kinds of requests easily
// mkdir api-mocker

// cd api-mocker

// npm init ( press enter for everything )
// the above command will create a package.json file
// you are creating a new project here
// npm means node package manager

// npm install json-server
// this will add json-server as a package into your project

// open package.json file and the following to the scripts key
// db.json is the file that you need to add your json for
// "start" : "json-server --watch db.json"

// npm run start
// run this for starting the server

// alternatively
// json-server --watch db.json

//---------------------------------------------------------------
// Student Activities
// Create a mock-server by follwing the documentation.
// Add your person detalis like name, age, gender, city etc in form of arry of object.
// Run mock server using npm command and check it with help of postman or thunder client.
// Conclusion
// Node.js is like a superhero for JavaScript, letting it do powerful things outside of web browsers. We explored its core features, like modules and NPM (Node Package Manager), which help manage tools and libraries.
//---------------------------------------------------------------

