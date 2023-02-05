//Make Connection
const scoket = io.connect("localhost:6001");

const send = document.getElementById("send");
const handle = document.getElementById("handle");
const message = document.getElementById("message");
const output = document.getElementById("output");

//Emit Events
send.addEventListener("click", () => {
    scoket.emit("chat", {
        message: message.value,
        handle: handle.value,
    });
});

//Listen events

scoket.on("chat", (data) => {
    output.innerHTML += `<p><strong>${data.handle}: </strong> ${data.message}</p>`;
});
