const express = require("express");
const { addAttendee, getAllAttendees, getAttendeeById, updateAttendee, deleteAttendee, getEventsByAttendee } = require("../controllers/attendeeController");

const router = express.Router();

// Add a new attendee
router.post("/", addAttendee);

// Get all attendees
router.get("/", getAllAttendees);

// Get a specific attendee by ID
router.get("/:id", getAttendeeById);

// Update an attendee by ID
router.put("/:id", updateAttendee);

// Delete an attendee by ID
router.delete("/:id", deleteAttendee);

// Get all events attended by a specific attendee
router.get("/:id/events", getEventsByAttendee);

module.exports = router;
