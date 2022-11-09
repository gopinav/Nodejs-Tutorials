const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);

  /** JSON response
  res.writeHead(200, { "Content-Type": "application/json" });
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.end(superHero);
   */
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
