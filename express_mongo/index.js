const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

const nameHbs = "hbs";

app.engine(nameHbs, hbs.engine);
app.set("view engine", nameHbs);
app.set("views", "views");

async function start(params) {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.eg7ix.mongodb.net/todos",
      {
        useNewUrlParser: false,
        useFindAndModify: false,
      }
    );

    app.listen(PORT, (params) => {
      console.log("some text");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
