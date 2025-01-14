const Organizer = require('../models/Organizer');

// Add a new organizer
exports.addOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.create(req.body);
    res.status(201).json(organizer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all organizers
exports.getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.status(200).json(organizers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific organizer by ID
exports.getOrganizerById = async (req, res) => {
  try {
    const organizer = await Organizer.findById(req.params.id).populate('events');
    if (!organizer) {
      return res.status(404).json({ message: 'Organizer not found' });
    }
    res.status(200).json(organizer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an organizer by ID
exports.updateOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!organizer) {
      return res.status(404).json({ message: 'Organizer not found' });
    }
    res.status(200).json(organizer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an organizer by ID
exports.deleteOrganizer = async (req, res) => {
  try {
    const organizer = await Organizer.findByIdAndDelete(req.params.id);
    if (!organizer) {
      return res.status(404).json({ message: 'Organizer not found' });
    }
    res.status(200).json({ message: 'Organizer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
