var BASE_URL="https://my-socket.herokuapp.com/";

const io = require("socket.io-client");

// let socket = io.connect(BASE_URL);


const socket = io("http://localhost:8080", {
    reconnectionDelayMax: 10000,
    // auth: {
    //     token: "123"
    // },
    // query: {
    //     "my-key": "my-value"
    // }
});


socket.on("connect", rr => {
    console.log("on connect", rr);
    socket.emit("message", "This is a message from the client")
    // socket.emit("salutations", "This is a message from the client")
})


// console.log(socket);
socket.on("welcome",data=>{
    console.log("received:",data)
})

socket.on("error", err => {
     console.log("error", err);
})

socket.on("open", rr => {
    console.log("open", rr);
})

socket.connect(res => {
    console.log("connect", res);
    
})
