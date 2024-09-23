// console.log("welcome to nodejs");

const http = require("http");
const fs = require("fs");
const url = require("url");

function serverHandler(req, res){
    // console.log("Req--", req);
    const currentDate = new Date();
    const currentUrl = url.parse(req.url, true);
    const logs = `${currentDate} New ${req.method} Request at ${req.url} query param: ${currentUrl.query.username} \n`;
    console.log("currenturl--", currentUrl);
    if (currentUrl.pathname === "/favicon.ico") return res.end();
    fs.appendFile("log.txt", logs, (err, data) => {
      // res.end("Welcome to my server !!!!")
      switch (currentUrl.pathname) {
        case "/":
          if(req.method === 'GET') res.end("Homepage");
          break;
        case "/aboutus":
          res.end("Hi Shubhi ");
          break;
        case "/signup":
          res.end("This is signup form");
          break;
        default:
          res.end("404");
      }
    });
  }

const server = http.createServer(serverHandler);

server.listen(8002, console.log("Server Started"));
