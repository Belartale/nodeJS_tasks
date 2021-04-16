const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "index t",
    isIndex: true,
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "CREATE t",
    isCreate: true,
  });
});

module.exports = router;
