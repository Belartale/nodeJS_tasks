import express from "express";
const PORT = process.env.PORT ?? 3000;
const app = express(); // app эти типа объекта и инициализация

app.get("/", (req, res) => {
  res.send("<h1>exp!!!!11</h1>");
});

app.listen(PORT, () => {
  console.log(`server start ${PORT}!!! ...`);
}); // создание веб сервера
