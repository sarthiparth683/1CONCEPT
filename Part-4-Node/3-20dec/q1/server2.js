const http = require("http");
const homePage = "<h1>Welcome to Home Page</h1>";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(homePage);
  } else if (req.url === "/aboutus") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h3>Welcome to About Page<h3/>");
  } else if (req.url === "/contactus") {
    res.setHeader("Content-Type", "text/html");
    res.end(`<a href="https://www.masaischool.com"  target="_blank">Visit Masai School.Com</a>`);
  } else if (req.url === "/index") {
    res.setHeader("Content-Type", "text/html");
    res.end(homePage);
  } else {
    res.end("404: Not Found");
  }
});

server.listen(8080, () => {
  console.log("Servre is running at http://localhost:8080");
});
