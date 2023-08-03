const http = require("http");

const localHost = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  //   console.log(req);
  res.end(`Hello World!`);
});

server.listen(port, localHost, () => {
  console.log(`Server is running at http://${localHost}:${port}`);
});
