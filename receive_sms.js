const http = require("http");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

http
  .createServer((req, res) => {
    const twiml = new MessagingResponse();

    twiml.message("The Robots are coming! Head for the hills!");

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  })
  .listen(1337, "127.0.0.1");

console.log("TwiML server running at http://127.0.0.1:1337/");
