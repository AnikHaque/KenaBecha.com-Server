const mongoose = require("mongoose");

async function dbConnection() {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.l5pzs3z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

  await mongoose.connect(connectionString);

  console.log("---MongoDB Database Connected---");
}

module.exports = dbConnection;
