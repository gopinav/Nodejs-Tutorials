const EventEmitter = require("node:events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

// Register another listener
emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving complimentary drink");
  }
});

// Emit an event
emitter.emit("order-pizza", "large", "mushrooms");
