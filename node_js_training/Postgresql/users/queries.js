const getUsers = 'SELECT * from users';
const getUsersById = 'SELECT * FROM users WHERE id = $1';
const checkEmailExist = 'SELECT u from users u WHERE u.email = $1';
const addUser = 'INSERT INTO users (first_name, last_name, email, gender, age, dob) VALUES ($1, $2, $3, $4, $5, $6)';
const removeUser = 'DELETE FROM users WHERE id = $1';
const updateUser = 'UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3';

module.exports = {
    getUsers,
    getUsersById,
    checkEmailExist,
    addUser,
    removeUser,
    updateUser
}