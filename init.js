const mongoose = require('mongoose');
const Chat = require("./What-s-up/models/chat");


main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allchat =[
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "radha",
        to: "krishna",
        msg: "hi",
        created_at: new Date()
    },
    {
        from: "krishna",
        to: "radha",
        msg: "hello",
        created_at: new Date()
    },
    {
        from: "radha",
        to: "krishna",
        msg: "i Love you",
        created_at: new Date()
    },
    {
        from: "Krinsha",
        to: "radha",
        msg: "I love you 2",
        created_at: new Date()
    },
];

Chat.insertMany(allchat);


