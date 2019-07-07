require("dotenv").config();
const client = require("./client");

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    from: process.env.TWILIO_NUMBER,
    to: process.env.SENDTO
  })
  .then(call => console.log(call.sid))
  .catch(err => console.error(err));
