const express = require('express');
const cors = require('cors');
const {connection} = require('./config/db');
const customerRouter = require('./routes/custometRoutes');

const PORT = 8000;

const app = express();

const corOptions = {
    origin: 'https://localhost:8000'
}

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

connection();

app.use('/api/customers', customerRouter);

app.listen(PORT, () => console.log("Server started"));