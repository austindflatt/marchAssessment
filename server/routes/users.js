var express = require('express');
var router = express.Router();
const { createUser, getUser, updateUser, deleteUser, getUserList } = require('./users/controller/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello from the users route');
});

// Create a user
router.post('/create-user', createUser);

// Get user by ID
router.get('/get-user/:id', getUser);

// Get all users
router.get('/get-users', getUserList);

// Update user
router.put('/update-user/:id', updateUser);

// Delete user
router.delete('/delete-user/:id', deleteUser);

module.exports = router;