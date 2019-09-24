const { createServer } = require("http");
const { createReadStream } = require("fs");
const { decode } = require("querystring");

const sendFile = (response, status, type, filePath) => {
    response.writeHead(status, { "Content-Type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, response) => {
  if(request.method === "POST") {
    let body = "";
    request.on("data", data => {
      body += data;
    })
    request.on("end", () => {
      const {name, email, message } = decode(body);
      console.log(`${name} (${email}): ${message}`);
    });
  }

    switch (request.url) {
      case "/":
        return sendFile(response, 200, "text/html", "./index.html");
    case "/bild.png":
        return sendFile(response, 200, "image/png", "./bild.png");
        case "/contact.html":
            return sendFile(response, 200, "text/html", "./contact.html");
  }
}).listen(8090);

console.log("Ashur port 8090");