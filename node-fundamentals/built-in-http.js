const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

/** HTML template
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const name = "Vishwas";
  let html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  html = html.replace("{{name}}", name);
  res.end(html);
});
*/

/** HTML response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});
 */

/** JSON response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.end(superHero);
   
});
*/

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
