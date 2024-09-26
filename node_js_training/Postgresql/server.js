const express = require('express');
const usersRoutes = require('./users/routes')

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Page');    
});

app.use('/api/v1/users', usersRoutes);

app.listen(PORT, () => console.log("Server Started"));