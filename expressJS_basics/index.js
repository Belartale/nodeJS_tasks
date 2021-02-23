import express from "express";
import { Agent } from "http";
import path from "path";
import { requestTime, logger } from "./mibblewares.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express(); // app эти типа объекта и инициализация

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "ejs"));
// console.log(app.get("views"));

app.use(express.static(path.resolve(__dirname, "static")));
app.use(requestTime);
app.use(logger);

app.get("/", (req, res) => {
  res.render("index", { title: "Main page" });
});

app.get("/fea", (req, res) => {
  res.render("fea", { title: "FEA" });
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "index.html"));
// });

// app.get("/features", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "features.html"));
// });

// app.get("/download", (req, res) => {
//   console.log(req.requestTime);
//   res.download(path.resolve(__dirname, "static", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`server start ${PORT}!!! ...`);
}); // создание веб сервера
