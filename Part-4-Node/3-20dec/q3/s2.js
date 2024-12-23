const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/signup") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h1>Signup Form</h1>
                    <form action="/signup" method="POST">
                        <label>Username:</label>
                        <input type="text" name="username" required />
                        <br />
                        <label>Password:</label>
                        <input type="password" name="password" required />
                        <br />
                        <button type="submit">Signup</button>
                    </form>
                </body>
            </html>
        `);
  } else if (req.method === "POST" && req.url === "/signup") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    console.log(`BODY : ${body}`);
    req.on("end", () => {
      const formData = new URLSearchParams(body);
      console.log(`FORM DATA : ${formData}`);
      const username = formData.get("username");
      const password = formData.get("password");
      const userEntry = `Username: ${username}, Password: ${password}\n`;
      fs.appendFile("user.txt", userEntry, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error saving user data");
        } else {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Thank You for Signup...!!!");
        }
      });
    });
  } else if (req.method === "GET" && req.url === "/allusers") {
    fs.readFile("user.txt", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading user data");
      } else {
        const users = data
          .split("\n")
          .filter((line) => line)
          .map((line) => line.replace(/, Password: .*/, ""))
          .join("<br />");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<html><body><h1>All Users</h1><p>${users}</p></body></html>`);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
