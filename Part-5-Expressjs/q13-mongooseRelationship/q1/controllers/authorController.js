const Author = require('../models/Author');
const Book = require('../models/Book');

// Add a new author
exports.addAuthor = async (req, res) => {
  const { name, birth_year, nationality } = req.body;

  try {
    const author = new Author({ name, birth_year, nationality });
    await author.save();
    res.status(201).json({ message: 'Author added successfully', author });
  } catch (error) {
    res.status(500).json({ message: 'Error adding author', error });
  }
};

// Get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate('books');
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching authors', error });
  }
}; 

// Get a single author by ID
exports.getAuthorById = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await Author.findById(id).populate('books');
    if (!author) return res.status(404).json({ message: 'Author not found' });

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching author', error });
  }
};

// Update an author
exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, birth_year, nationality } = req.body;

  try {
    const author = await Author.findByIdAndUpdate(
      id,
      { name, birth_year, nationality },
      { new: true }
    );
    if (!author) return res.status(404).json({ message: 'Author not found' });

    res.status(200).json({ message: 'Author updated successfully', author });
  } catch (error) {
    res.status(500).json({ message: 'Error updating author', error });
  }
};

// Delete an author
exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;

  try {
    const author = await Author.findById(id);
    if (!author) return res.status(404).json({ message: 'Author not found' });

    // Ensure there are no books linked to the author before deleting
    const books = await Book.find({ author: id });
    if (books.length > 0) {
      return res
        .status(400)
        .json({ message: 'Cannot delete author with linked books' });
    }

    await Author.findByIdAndDelete(id);
    res.status(200).json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting author', error });
  }
};
