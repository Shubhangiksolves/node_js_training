const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const connectMongoDB = require('./connection');

const { restricTOLoggedinStudentOnly} = require('./Middleware/auth')
const {logReqRes} = require('./Middleware/index');

const staticRoute = require('./Routes/staticRouter');
const userRouter = require('./Routes/userRoutes');
const studentRouter = require('./Routes/studentRoutes');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes('log.txt'));
app.use(cookieParser());

// Connection
connectMongoDB('mongodb://127.0.0.1:27017/mongo-db-test');

//view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./Views'));

// Routes
const testUser = [
    {
        name: 'Annabell',
        age: 1000
    },
    {
        name: 'Nun',
        age: 2000
    }
]

app.get('/restrict-route', restricTOLoggedinStudentOnly, (req,res) => {
    return res.render('home', {
        users: testUser
    });
});
app.use('/', staticRoute);
app.use('/', userRouter);
app.use('/student', studentRouter);

app.listen(PORT, () => console.log("Serevr started with mongo"))