const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Route to add a new author
router.post('/', authorController.addAuthor);

// Route to get all authors
router.get('/', authorController.getAllAuthors);

// Route to get a specific author by ID
router.get('/:id', authorController.getAuthorById);

// Route to update an existing author
router.put('/:id', authorController.updateAuthor);

// Route to delete an author
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
  