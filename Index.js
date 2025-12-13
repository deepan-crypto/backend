// fs: FileSystem

const fs = require("fs");

// blocking code
// Synchronous code
// 1.path, 2.encryption
let read = fs.readFileSync("./Files/append.txt", "utf-8");
console.log(read);

// 2. Write a file
// 1.path 2.Content 3.encryption
fs.writeFileSync(
  "./Files/append.txt",
  "The file is not here but I want to write",
  "utf-8"
);

// non-blocking code
// asynchronous code
// read data
fs.readFile("./Files/read.txt", "utf-8", (err, data) => {
  if (err) return console.log("Error comes");
  console.log(data);
});

read = fs.readFileSync("./Files/append.txt", "utf-8");
console.log(read);