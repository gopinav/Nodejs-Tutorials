const fs = require("fs");
const zlib = require("zlib");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.createWriteStream("./file2.txt.gz"));

readableStream.on("end", () => {
  console.log("Done reading");
});

readableStream.on("error", (err) => {
  console.log(err);
});
