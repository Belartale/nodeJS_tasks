// File System
const fs = require("fs");
const path = require("path");

// создаёт новую папку
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("create file");
// });

const filePath = path.join(__dirname, "test", "some text.txt");

// fs.writeFile(filePath, "lorem", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("created .txt!!!");
// });
// fs.appendFile(filePath, "\nloremasdasd", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("created .txt!!!");
// });

fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }
  const data = Buffer.from(content);
  console.log("content", data.toString());
});
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log("content", content);
});
