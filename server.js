const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const http = require('http');
const { Server } = require('socket.io');
const userRoutes = require("./routes/userRoutes");
const confessionRoutes = require("./routes/confessionRoutes")
const cors = require("cors");
const path = require("path");
dotenv.config();
connectDB();
const Port = process.env.PORT || 8080
const app = express();
const server = http.createServer(app);
// const io = socketIO(server);
app.use(express.json());
// app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/}));

app.use(cors());
const io = new Server(server, {
  cors: {
    methods: ['GET', 'POST'],
    origin: "http://localhost:3000"
  }

})
// Socket.io event handling
io.on('connection', (socket) => {
  console.log('A client connected.');

  socket.on('disconnect', () => {
    console.log('A client disconnected.');
  });

  // Receive new confession from client
  socket.on('newConfession', (confessionData) => {
    io.emit('displayConfession', confessionData);
  });
});



app.use("/user", userRoutes);

app.use("/confession", confessionRoutes)

//production script

// const __dirname1=path.resolve();
// app.use(express.static(path.join(__dirname1,"./frontend/build")))
// app.get("*",(req,res)=>{
//   res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
// })

app.get("/", (req, res) => {

  res.send("its runiing");
});
server.listen(Port, () => {
  console.log(`server started ${Port} `);
});
