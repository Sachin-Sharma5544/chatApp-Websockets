// const  = require("socket.io");

//Make Connection
const socket = io.connect("localhost:6001");

const send = document.getElementById("send");
const handle = document.getElementById("handle");
const message = document.getElementById("message");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");
//Emit Events
send.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        handle: handle.value,
    });
});

message.addEventListener("keypress", () => {
    socket.emit("typing", { handle: handle.value });
});

//Listen events

socket.on("chat", (data) => {
    feedback.innerHTML = "";
    message.value = "";
    output.innerHTML += `<p><strong>${data.handle}: </strong> ${data.message}</p>`;
});

socket.on("typing", (data) => {
    feedback.innerHTML = `<p><em>${data.handle} is typing </em></p>`;
});
