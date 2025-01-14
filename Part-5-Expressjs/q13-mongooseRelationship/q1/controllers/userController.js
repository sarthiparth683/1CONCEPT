const User = require('../models/User');
const Transaction = require('../models/Transaction');

// Add a new user
exports.addUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const user = new User({ username, email });
    await user.save();

    res.status(201).json({ message: 'User added successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {  
    const users = await User.find().populate({
      path: 'borrowed_books',
      populate: { path: 'book', select: 'title' },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate({
      path: 'borrowed_books',
      populate: { path: 'book', select: 'title' },
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Ensure the user has no active transactions before deletion
    const activeTransaction = await Transaction.findOne({
      user: id,
      return_date: null,
    });

    if (activeTransaction) {
      return res.status(400).json({
        message: 'Cannot delete user with active borrowed books',
      });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// List all borrowed books by a user
exports.getBorrowedBooks = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate({
      path: 'borrowed_books',
      populate: { path: 'book', select: 'title' },
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({
      username: user.username,
      borrowed_books: user.borrowed_books.map((transaction) => ({
        bookId: transaction.book._id,
        title: transaction.book.title,
        borrow_date: transaction.borrow_date,
        return_date: transaction.return_date,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching borrowed books', error });
  }
};
