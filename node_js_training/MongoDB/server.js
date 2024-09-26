const express = require('express');
const userRuter = require('./Routes/userRoutes');
const connectMongoDB = require('./connection');
const {logReqRes} = require('./Middleware/index');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

// Connection
connectMongoDB('mongodb://127.0.0.1:27017/mongo-db-test')

// Routes
app.use('/', userRuter);

app.listen(PORT, () => console.log("Serevr started with mongo"))