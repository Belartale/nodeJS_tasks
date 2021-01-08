const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("sobutia", (data) => {
  console.log("on sobutia", data);
});

emitter.emit("sobutia", { a: 3 });
