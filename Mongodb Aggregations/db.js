const mongodb = require("mongodb");
const url = "mongodb://localhost:27017";
let db;

async function getData() {
  if (db) {
    return db;
  }

  const client = new mongodb.MongoClient(url);
  try {
    await client.connect();
    db = client.db("movies");
    return db;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getData;
