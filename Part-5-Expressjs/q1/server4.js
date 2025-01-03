// local hosting in express
const express = require("express");
const os = require("os");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
//------------------------------------------------------------
app.use(function (req, res, next) {
  //   res.send("<h1>Middleware-1 Working</h1>");  // res.send wont work in middleware
  console.log("Middleware-1 Working");
  console.log(`Method-${req.method} ${req.url}`);
  console.log('Time:', Date.now())

  next();
});

//-------------------------------------------------------------
//--------------------------------------------------------------
app.get("/", (req, res) => {
  res.send(`<h1>Hello World ! server4</h1> 'Time:', ${Date.now()}  `   );
});
// Function to get local network address
function getNetworkAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}
app.listen(PORT, () => {
  const localAddress = `http://localhost:${PORT}`;
  const networkAddress = `http://${getNetworkAddress()}:${PORT}`;
  console.log(`Server is running at:`);
  console.log(`Local: ${localAddress}`);
  console.log(`Network: ${networkAddress}`);
});
