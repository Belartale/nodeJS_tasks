const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const todoRouters = require("./routes/todos");

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs", // мы изм на короткое имя (на "hbs")
});

app.engine("hbs", hbs.engine); // регистрация движка по клю hbs
app.set("view engine", "hbs");
app.set("views", "views"); // регистрация папки

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // подключаем css

app.use(todoRouters); // регист даный роутер

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin1234:admin1234@cluster0.9pjes.mongodb.net/todos",
      {
        useNewUrlParser: true,
        useUnifiedTopology: false,
      }
    );

    app.listen(PORT, () => {
      console.log("SERVER STARTTTTTTTTTTTTTTTTTTTT");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
