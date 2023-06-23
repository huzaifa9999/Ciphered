const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const confessionRoutes= require("./routes/confessionRoutes")
const cors = require("cors");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("its runiing");
});
app.use("/user", userRoutes);

app.use("/confession",confessionRoutes)

app.listen(8080, () => {
  console.log("server started");
});
