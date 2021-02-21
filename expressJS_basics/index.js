import express from "express";
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express(); // app эти типа объекта и инициализация

app.get("/", (req, res) => {
  // res.send("<h1>exp</h1>");
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.get("/features", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "features.html"));
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname, "static", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server start ${PORT}!!! ...`);
}); // создание веб сервера
