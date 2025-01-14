const express = require('express');
const {
  addRegistration,
  getAllRegistrations,
  getRegistrationById,
  deleteRegistration,
} = require('../controllers/registrationController');

const router = express.Router();

// Add a new registration
router.post('/', addRegistration);

// Get all registrations
router.get('/', getAllRegistrations);

// Get a specific registration by ID
router.get('/:id', getRegistrationById);

// Delete a registration by ID
router.delete('/:id', deleteRegistration);

module.exports = router;
  