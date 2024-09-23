const express = require("express");
const usersData = require("./MOCK_DATA.json");

const app = express();
const PORT = 8001;

app.get("/api/users", (req, res) => {
  return res.json(usersData);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = usersData.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    // update the user with id
  })
  .delete((req, res) => {
    // delete the user with id
  });

app.post("/api/users", (req, res) => {
  // create new user
});

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = usersData.find(user => user.id === id);
//     return res.json(user);
// });

// app.put('/api/users/:id', (req, res) => {
    // update the user with id
// });

// app.delete('/api/users/:id', (req, res) => {
    // delete the user with id
// });

app.listen(PORT, () => console.log("Server Started !!!"));
