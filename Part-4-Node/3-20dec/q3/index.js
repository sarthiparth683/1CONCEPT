// Exploring crypto module
const crypto = require("crypto");
const fs = require("fs");
let normal_str = "Hello, Good Morning";
let public_key = "abcd123";
let private_key = "3#$%!";
function generateKeyFiles() {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 520,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "",
    },
  });
  fs.writeFileSync("public_key", keyPair.publicKey);
  fs.writeFileSync("private_key", keyPair.privateKey);
}
function encryptString(plaintext, publicKeyFile) {
  const publicKey = fs.readFileSync(publicKeyFile, "utf8");
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext, "utf8"));
  return encrypted.toString("base64");
}
function decryptString(encryptedString, publicKeyFile) {
  const publicKey = fs.readFileSync(publicKeyFile, "utf8");
  const decrypted = crypto.publicDecrypt(publicKey, encryptedString);
  return decrypted.toString("base64");
}
generateKeyFiles();

// let encryptedString = encryptString(normal_str, "./private_key");

// console.log(`ENCRYPTED STRING : ${encryptedString}`);

// let decryptedString = decryptString(encryptedString, "./public_key");

// console.log(`DECRYPTED STRING : ${decryptedString}`);

// console.log(crypto.randomUUID());

const readStream = fs.createReadStream("test2.txt", { encoding: "utf8" });

const writeStream = fs.createWriteStream("output.txt");

console.time("Started Stream");
readStream.pipe(writeStream);
console.timeEnd("Started Stream");

// readStream.on("data", (chunk) => {
//   console.log("Reading chunk");
//   console.log(chunk);
// });