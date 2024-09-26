const pool = require("../db");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows);
  });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  pool.query(queries.getUsersById, [id], (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows);
  });
};

const addUser = (req, res) => {
  const { first_name, last_name, email, gender, age, dob } = req.body;
  // check if email exists
  pool.query(queries.checkEmailExist, [email], (err, data) => {
    if (data?.rows?.length) {
      res.send("Email already exists");
    } else {
      // add user to db
      pool.query(
        queries.addUser,
        [first_name, last_name, email, gender, age, dob],
        (err, data) => {
          if (err) throw err;
          res.status(200).send("user created successfully");
        }
      );
    }
  });
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUsersById, [id], (err, data) => {
    const userNotFound = !data?.rows?.length;
    if (userNotFound) {
      res.send("User does not exist in database");
    } else {
      pool.query(queries.removeUser, [id], (err, data) => {
        if (err) throw err;
        res.status(200).send(`User with id ${id} removed successfully`);
      });
    }
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { first_name, last_name } = req.body;
  pool.query(queries.getUsersById, [id], (err, data) => {
    const userNotFound = !data?.rows?.length;
    if (userNotFound) {
      res.send("User does not exist in database");
    } else {
      pool.query(
        queries.updateUser,
        [first_name, last_name, id],
        (err, data) => {
          if (err) throw err;
          res.status(200).send("User updated successfully");
        }
      );
    }
  });
};

module.exports = { getUsers, getUsersById, addUser, removeUser, updateUser };
