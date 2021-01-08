const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("sobutia", (data) => {
//   console.log("on sobutia", data);
// });

// emitter.emit("sobutia", { a: 3 });

// setTimeout(() => {
//   emitter.emit("sobutia", { b: 31 });
// }, 2000);

class Dispatcher extends EventEmitter {
  subscride(eventName, cd) {
    console.log("[Subscride ...]");
    this.on(eventName, cd);
  }

  dispatch(eventName, data) {
    console.log("[Dispatch ...]");
    this.emit(eventName, data);
  }
}
