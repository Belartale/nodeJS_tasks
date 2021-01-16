const EventEmitter = require("events");

const emitter = new EventEmitter();

//! .on проглушивать события
// emitter.on("sobutia", (data) => {
//   console.log("on sobutia", data);
// });

//! по нужно имитить собития .emit
// emitter.emit("sobutia", { a: 3 });

// можно сделать так
// setTimeout(() => {
//   emitter.emit("sobutia", { b: 31 });
// }, 2000);

// можем наследоваться от слассов
class Dispatcher extends EventEmitter {
  subscribe(eventName, cd) {
    console.log("[Subscribe ...]");
    this.on(eventName, cd);
  }

  dispatch(eventName, data) {
    console.log("[Dispatching ...]");
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();

// диспатчить нужно после проглушки
//dis.dispatch("aa", { aa: 22 });

dis.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});

dis.dispatch("aa", { aa: 22 });
