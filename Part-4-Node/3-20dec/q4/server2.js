const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to Home Page<h1/>");
  } else if (req.url === "/signup") {
    let Signup = fs.readFileSync("./signUp.html", "utf-8");
    res.end(Signup);
  } else if (req.url === "/allusers") {
    let allusers = fs.readFileSync("./user.txt", "utf-8");
    res.end(allusers);
  } else {
    res.end("404: Not Found");
  }
});

server.listen(8080, () => {
  console.log("Servre is running at http://localhost:8080");
});
