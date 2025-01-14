const express = require('express');
const {
  addOrganizer,
  getAllOrganizers,
  getOrganizerById,
  updateOrganizer,
  deleteOrganizer,
} = require('../controllers/organizerController');

const router = express.Router();

// Add a new organizer
router.post('/', addOrganizer);

// Get all organizers
router.get('/', getAllOrganizers);

// Get a specific organizer by ID
router.get('/:id', getOrganizerById);

// Update an organizer by ID
router.put('/:id', updateOrganizer);

// Delete an organizer by ID
router.delete('/:id', deleteOrganizer);

module.exports = router;
