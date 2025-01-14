const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to add a new user
router.post('/', userController.addUser);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a specific user by ID
router.get('/:id', userController.getUserById);

// Route to update an existing user
router.put('/:id', userController.updateUser);

// Route to delete a user
router.delete('/:id', userController.deleteUser);

// Route to get all borrowed books by a user
router.get('/borrowed/:id', userController.getBorrowedBooks);

module.exports = router;
  