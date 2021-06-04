// const express = require("express");
// const app = express();

const { Socket } = require("socket.io");

const port = process.env.PORT || 8080;
const http = require("http").createServer();

console.warn("this is a warning")

const io = require("socket.io")(http);
// console.log(io);

io.on("connection", (socket) => {

  console.info("new client is connected!")
  socket.emit("welcome", "welcome to the socket")


  socket.on("message", (message) => {
    console.log("message from cleint >>");
    console.info(message)
  });

  socket.on("disconnect", (reason) => {

    console.log("client disconnected with reason >>");
    console.info(reason)
  });

});

io.on("message", (data) => {
  console.log(data);
});

// handle the event sent with socket.emit()
io.on("salutations", (elem1, elem2, elem3) => {
  console.log(elem1, elem2, elem3);
});

http.listen(port, () => {
  console.log("server is listening on " + port)
});