const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (response, status, type, filePath) =>{
    response.writeHead(status, {"Content-type": type });
    createReadStream(filePath).pipe(response);
};

createServer((request, result) => {
    switch (request.url) {
        case "/":
            return sendFile(result, 200, "");
        case "/img_2.jpg":
            return sendFile(result, 200, "");
        default:

}
}).listen(3000);

console.log("ashur' personal website running on port 3000");