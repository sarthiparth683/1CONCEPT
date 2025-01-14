const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); // Ensure this path is correct
// console.log(bookController);
// Route to add a new book
router.post('/', bookController.addBook);

// Route to get all books
router.get('/', bookController.getAllBooks);

// Route to get a specific book by ID
router.get('/:id', bookController.getBookById);

// Route to get all books by a specific author
router.get('/author/:authorId', bookController.getBooksByAuthor);

// Route to update a book
router.put('/:id', bookController.updateBook);

// Route to delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
      