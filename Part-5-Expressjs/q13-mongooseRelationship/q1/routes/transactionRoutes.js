const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Route to borrow a book
router.post('/borrow', transactionController.borrowBook);

// Route to return a borrowed book
router.post('/return', transactionController.returnBook);

// Route to get all borrowed books by a specific user
router.get('/user/:userId', transactionController.getBorrowedByUser);

// Route to get all transactions for a specific book
router.get('/book/:bookId', transactionController.getTransactionsByBook);

module.exports = router;
   