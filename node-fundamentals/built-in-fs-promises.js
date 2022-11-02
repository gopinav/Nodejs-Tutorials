const fs = require("fs/promises");

console.log("First");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

// fs.readFile("file.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

console.log("Second");
