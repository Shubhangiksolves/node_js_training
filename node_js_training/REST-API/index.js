const express = require("express");
const usersData = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8001;

// middleware (Plugin)
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I am Middleware 1");
  next();
});

app.use((req, res, next) => {
  req.currentUser = "Shubhi";
  console.log("I am Middleware 2");
  next();
  // res.end('End in middleware 2');
});

app.use((req, res, next) => {
  console.log("I am Middleware 3");
  console.log("CurrentUser: ", req.currentUser);
  fs.appendFile(
    "log.txt",
    `\n user:${req.currentUser} date: ${new Date()} method: ${req.method} path: ${
      req.path
    }`,
    (err, data) => {
      next();
    }
  );
});

app.get("/users", (req, res) => {
  const html = `<ul>${usersData.map((user) => {
    return `<li>${user.first_name}</li>`;
  })}</ul>`;
  res.send(html);
});

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
    const id = Number(req.params.id);
    const body = req.body;
    usersData.map((user) => {
      if (user.id === id) {
        user.email = body.email;
        user.first_name = body.first_name;
        user.gender = body.gender;
        user.last_name = body.last_name;
      }
    });
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(usersData),
      (error, data) => {
        return res.json({ status: "success", id: id });
      }
    );
  })
  .delete((req, res) => {
    // delete the user with id
    const id = Number(req.params.id);
    const updatedUsers = usersData.filter((user) => user.id !== id);
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(updatedUsers),
      (error, data) => {
        return res.json({ status: "success", id: id });
      }
    );
  });

app.post("/api/users", (req, res) => {
  // create new user
  const body = req.body;
  console.log(body);
  usersData.push({ ...body, id: usersData.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(usersData), (error, data) => {
    return res.json({ status: "success", id: usersData.length });
  });
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
