const { Router } = require("express");
const Todo = require("../models/Todo");
const router = Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find({});

  let arr = [];

  let set = new Set();

  await todos.forEach((object) => {
    for (const key in object) {
      if (key == "title") {
        const element = object[key];
        arr.push(element);
      }
    }
  });

  await res.render("index", {
    title: "INDEX t",
    isIndex: true,
    todos: arr,
  });

  await console.log(arr);
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "CREATE t",
    isCreate: true,
  });
});

router.post("/create", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  }); // что бы видело body нужно: app.use(express.urlencoded({ extended: true }));

  await todo.save(); // асинхроность и воз промис
  await res.redirect("/"); // посмотреть список всех todo
});

module.exports = router;
