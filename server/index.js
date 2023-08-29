import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import DatabaseConnection from "./database/db.js";


const app = express();
app.use(cors());
const PORT = 8000;
app.use("/", router);

DatabaseConnection()

app.listen(PORT, () => {
  console.log("server is running on PORT " + PORT);
});
