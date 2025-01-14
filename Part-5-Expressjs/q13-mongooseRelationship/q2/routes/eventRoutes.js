const express = require('express');
const {
  addEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getAttendeesByEvent,
} = require('../controllers/eventController');

const router = express.Router();

// Add a new event
router.post('/', addEvent);

// Get all events
router.get('/', getAllEvents);

// Get a specific event by ID
router.get('/:id', getEventById);

// Update an event by ID
router.put('/:id', updateEvent);

// Delete an event by ID
router.delete('/:id', deleteEvent);

// Get all attendees for a specific event
router.get('/:id/attendees', getAttendeesByEvent);

module.exports = router;
