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
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
const io = new Server(server, {
  cors: {
    methods: ['GET', 'POST'],
    origin: "*",
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

// app.get("/", (req, res) => {

//   res.send("its runiing ites go");
// });

app.use("/user", userRoutes);

app.use("/confession", confessionRoutes);
// app.use(express.static("./frontend/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
// })


//production script

// const __dirname1=path.resolve();
// app.use(express.static(path.join(__dirname1,"./frontend/build")))
// app.get("*",(req,res)=>{
//   res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
// })
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url 
// HTTP/:http-version" :status :res[content-length] :response-time ms'));


app.get('*/frontend', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.listen(Port, () => {
  console.log(`server started ${Port} `);
});
