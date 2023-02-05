const path = require("path");

const socket = require("socket.io");
const express = require("express");
const app = express();

const PORT = 6001;

const server = app.listen(PORT, "localhost", () => {
    console.log(`Server started at port ${PORT}`);
});

//static folder
app.use(express.static(path.join(__dirname, "public")));

//socket connection
const io = socket(server);
io.on("connection", (socket) => {
    console.log("made scoket connection", socket.id);
    socket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    });
});
