const http = require("http");

const server = http.createServer(function(req, res) {
  console.log(`user visited ${req.url}`);
  res.end("hello!");
});

server.listen(3000);
