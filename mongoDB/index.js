const { MongoClient } = require("mongodb");
const chalk = require("chalk"); // chalk.red(tex)

// admin-add-user1
const client = new MongoClient(
  "mongodb+srv://admin-add-user1:admin-add-user1@cluster0.mrah9.mongodb.net/mongo-add-user?retryWrites=true&w=majority"
); // созд объект этого клиента

const start = async () => {
  try {
    await client.connect();
    console.log(chalk.green("START SERVER"));

    await client.db().createCollection("users"); // создать колекцию
    const users = client.db().collection("users"); // вынести эту колекцию в перем
    // теперь мы можем добавлять удалять измен

    await users.insertOne({ name: "bel", age: 33 });
    const user = await users.findOne({ name: "bel" });

    console.log(user);
  } catch (error) {
    console.log(chalk.red(error));
  }
};

start();
