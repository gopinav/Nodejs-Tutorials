const { Worker } = require("worker_threads");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");

    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow Page ${j}`);
    });

    worker.on("error", (err) => {
      console.log(err);
    });
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
