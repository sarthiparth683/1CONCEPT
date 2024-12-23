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
    // let data = fs.readFileSync("./data.json"); //doesn't change on removing utf-8 ?....
    res.end(data);
  } else if (req.url === "/head") {
    res.setHeader("Content-Type", "text/html");  //setHeader...
    res.end(" <h1> This is Header Example</h1>  ");
  } else if (req.url === "/test") {
    let test1 = fs.readFileSync("./test.txt", "utf-8");
    res.end(test1);
  } else if (req.url === "/test2") {
    res.write("Loading...");
    setTimeout(() => {
      res.write("Still loading...");
    }, 1000);
    setTimeout(() => {
      res.end("Done!");
    }, 2000); // not taking time.......
  } else {
    res.end("404: Not Found");
  }
});

server.listen(8080, () => {
  console.log("Servre is running at http://localhost:8080");
});
