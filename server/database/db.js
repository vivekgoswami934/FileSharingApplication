import mongoose from "mongoose";

const DatabaseConnection = async () => {
  const MONGO_DB_URL =
    "mongodb+srv://vivekgoswami:vivek.123@cluster0.ypgueg9.mongodb.net/FILESHARINGAPP?retryWrites=true&w=majority";

  try {
    await mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });
    console.log("Database connection established");
  } catch (err) {
    console.log("Error while connect to database", err.message);
  }
};


export default DatabaseConnection;
