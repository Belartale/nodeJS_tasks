const { MongoClient } = require("mongodb");

const client = new MongoClient("URL");

const start = async () => {
  try {
    console.log("YEEEEESSSSSSSSSSSSS");
    client.connect();
  } catch (error) {
    console.log("NOOOOOOOOOOOOOOOOOO");
    console.log(error);
  }
};

start();
