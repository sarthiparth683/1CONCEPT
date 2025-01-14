const Transaction = require('../models/Transaction');
const Book = require('../models/Book');
const User = require('../models/User');

// Borrow a book
exports.borrowBook = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    // Check if the book exists and is available
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const activeTransaction = await Transaction.findOne({ book: bookId, return_date: null });
    if (activeTransaction) {
      return res.status(400).json({ message: 'Book is currently borrowed by another user' });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Create a transaction
    const transaction = new Transaction({
      book: bookId,
      user: userId,
      borrow_date: new Date(),
    });

    await transaction.save();

    // Add transaction to user's borrowed_books
    user.borrowed_books.push(transaction._id);
    await user.save();

    res.status(201).json({ message: 'Book borrowed successfully', transaction });
  } catch (error) {
    res.status(500).json({ message: 'Error borrowing book', error });
  }
};

// Return a borrowed book
exports.returnBook = async (req, res) => {
  const { transactionId } = req.body;

  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

    if (transaction.return_date) {
      return res.status(400).json({ message: 'Book is already returned' });
    }

    // Update return_date
    transaction.return_date = new Date();
    await transaction.save();

    res.status(200).json({ message: 'Book returned successfully', transaction });
  } catch (error) {
    res.status(500).json({ message: 'Error returning book', error });
  }
};

// Get books borrowed by a specific user
exports.getBorrowedByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const transactions = await Transaction.find({ user: userId }).populate('book');
    if (!transactions.length) {
      return res.status(404).json({ message: 'No transactions found for this user' });
    }

    const borrowedBooks = transactions.map((transaction) => ({
      bookId: transaction.book._id,
      title: transaction.book.title,
      borrow_date: transaction.borrow_date,
      return_date: transaction.return_date,
    }));

    res.status(200).json(borrowedBooks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

// Get transactions for a specific book
exports.getTransactionsByBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const transactions = await Transaction.find({ book: bookId }).populate('user');
    if (!transactions.length) {
      return res.status(404).json({ message: 'No transactions found for this book' });
    }

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};
