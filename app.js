const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to my first website");
  res.end();
});

server.listen(5000);
