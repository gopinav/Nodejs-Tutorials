const crypto = require("crypto");
const https = require("https");

// process.env.UV_THREADPOOL_SIZE = 16;

const start = Date.now();

const MAX_CALLS = 12;

for (let i = 0; i < MAX_CALLS; i++) {
  // crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  //   console.log(`Hash: ${i + 1}`, Date.now() - start);
  // });

  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
