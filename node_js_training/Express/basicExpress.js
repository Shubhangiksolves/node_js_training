// const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
   return res.send('Home Page');
});

app.get('/about', (req, res) => {
    return res.send('Home Page');
});

// const server = http.createServer(app);

// server.listen(8001, () => console.log("Server Stared !!"));

app.listen(8001, () => console.log("Server Stared !!"));