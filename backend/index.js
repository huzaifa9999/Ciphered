const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("its runiing");
});
app.use("/user", userRoutes);

app.listen(8080, () => {
  console.log("server started");
});
