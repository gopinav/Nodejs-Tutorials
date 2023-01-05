/** Experiment 1 - all user written JavaScript code takes priority over async code that the runtime would like to execute */

// console.log("console.log 1");
// process.nextTick(() => console.log("this is process.nextTick 1"));
// console.log("console.log 2");

/** Experiment 2 - all callbacks in nextTick queue are executed before all callbacks in promise queue */

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => console.log("this is the inner next tick inside next tick"));
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => console.log("this is the inner next tick inside Promise then block"));
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

/** Experiment 3 - microtask queues are executed before timer queue */

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => consol.log("this is the inner next tick inside next tick"));
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

/** Experiment 4 - microtask queues are executed inbetween timer queue callbacks */

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   process.nextTick(
//     console.log.bind(console, "this is the inner next tick inside setTimeout")
//   );
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(
//     console.log.bind(console, "this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(
//     console.log.bind(
//       console,
//       "this is the inner next tick inside Promise then block"
//     )
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

/** Experiment 5 - timer queue callbacks are executed in FIFO order */

// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// setTimeout(() => console.log("this is setTimeout 2"), 500);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

/** Experiment 6 - Microtask queues callbacks are executed before I/O queue callbacks */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

/** Experiment 7 - Timer anamoly. Order of execution can never be guaranteed */

// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"), 0);

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

/** Experiment 8 - I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks are executed */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 1000000000; i++) {}

/** Experiment 9 - I/O events are polled and callbacks are added only after I/O is complete */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) {}

/** Experiment 10 - Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed  */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}

/** Experiment 11 - Microtask queues callbacks are executed after I/O callbacks and before check queue callbacks  */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() => console.log("this is inner process.nextTick inside readFile"));
//   Promise.resolve().then(() => console.log("this is inner Promise.resolve inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}

/** Experiment 12 - Microtask queues callbacks are executed inbetween check queue callbacks  */

// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() => console.log("this is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));

/** Experiment 13 - Timer anamoly. Order of execution can never be guaranteed */

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));
// Uncomment below to guarantee order
// for (let i = 0; i < 1000000000; i++) {}

/** Experiment 14 - Close queue callbacks are executed after all other queues callbacks  */

// const fs = require("fs");

// const readableStream = fs.createReadStream(__filename);
// readableStream.close();

// readableStream.on("close", () => {
//   console.log("this is from readableStream close event callback");
// });
// setImmediate(() => console.log("this is setImmediate 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
