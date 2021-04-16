const { Router } = require("express");
const Todo = require("../models/Todo");

const router = Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find({});

  res.render("index", {
    title: "index t",
    isIndex: true,
    todos,
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "CREATE t",
    isCreate: true,
  });
});

module.exports = router;
