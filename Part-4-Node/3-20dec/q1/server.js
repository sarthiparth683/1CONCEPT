const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to Home Page-2</h1>");
  } else if (req.method === "GET" && req.url === "/signup") {
    let signupForm = fs.readFileSync("./signUp.html", "utf-8");
    res.setHeader("Content-Type", "text/html");
    res.end(signupForm);
  } else if (req.method === "POST" && req.url === "/signup") {
    //posting data in html file?................
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const username = params.get("username");
      const password = params.get("password");
      if (username && password) {
        const userEntry = `${username}:${password}\n`;
        fs.appendFileSync("./user.txt", userEntry, "utf-8");
        res.setHeader("Content-Type", "text/plain");
        res.end("Thank You for Signup...!!!");
      } else {
        res.statusCode = 400;
        res.end("Invalid input. Please provide both username and password.");
      }
    });
  } else if (req.method === "GET" && req.url === "/allusers") {
    try {
      const allUsers = fs.readFileSync("./user.txt", "utf-8");
      // res.end(allUsers); // both name and password
      const usernames = allUsers //usernames Extract usernames only  no password
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((entry) => entry.split(":")[0])
        .join("<br/>");
      res.setHeader("Content-Type", "text/html");
      res.end(`<h1>All Users:</h1><p>${usernames}</p>`);
    } catch (err) {
      res.statusCode = 500;
      res.end("Error reading users.");
    }
  } else {
    res.statusCode = 404;
    res.end("404: Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});
