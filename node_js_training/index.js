// console.log("welcome to nodejs");

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log("Req--", req);
    const dates = new Date();
    const logs = `${dates} New Request at ${req.url}\n`
    fs.appendFile('log.txt', logs, (err, data)=>{
        res.end("Welcome to my server !!!!")
    })
});

server.listen(8002, console.log("Server Started"));
