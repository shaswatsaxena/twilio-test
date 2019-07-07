require("dotenv").config();
const client = require("./client");

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: process.env.TWILIO_NUMBER,
    to: process.env.SENDTO
  })
  .then(message => console.log(message.sid))
  .catch(err => console.error(err));
