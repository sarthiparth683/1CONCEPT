const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the Home Page");
  } else if (req.url === "/about") {
    res.end("This is the about section");
  } else if (req.url === "/home2") {
    res.write("this is home2");
    res.end();
  } else if (req.url === "/data") {
    let data = fs.readFileSync("./data.json", "utf-8");
    res.end(data);
  } else if (req.url === "/head") {
    res.setHeader("Content-Type", "text/html");
    res.end(" <h1> This is Header Example</h1>  ");
  } else if (req.url === "/test") {
    let test1 = fs.readFileSync("./test.txt", "utf-8");
    res.end(test1);
  } else if (req.url === "/load") {
    res.write("Loading...\n");

    setTimeout(() => {
      res.write("Still loading...\n");

      setTimeout(() => {
        res.end("Done!");
      }, 1000);
    }, 1000);
  } else {
    res.end("404: Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});
