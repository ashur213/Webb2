const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (response, status, type, filePath) => {
    response.writeHead(status, { "Content-Type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
    switch (request.url) {
      case "/":
        return sendFile(response, 200, "text/html", ".index.html");
    case "bild.jpg":
        return sendFile(response, 200, "image/png", "./bild.png");
  }
}).listen(3000);

console.log("Ashur, port 3000");