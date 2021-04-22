const { Router } = require("express");
const Todo = require("../models/Todo");
const router = Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find({}).lean();

  await res.render("index", {
    title: "INDEX t",
    isIndex: true,
    todos: todos,
  });
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

router.post("/complete", async (req, res) => {
  const todo = await Todo.findById(req.body.id); // находит нужный todo (name="id")

  todo.completed = !!req.body.completed;
  await todo.save();

  res.redirect("/"); // обновление страницы
}); // созд роутер

module.exports = router;
