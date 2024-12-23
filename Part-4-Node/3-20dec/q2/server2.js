const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  ); //without req it is running
});

server.listen(8000, () => {
  console.log("http://localhost:8000");
});
  