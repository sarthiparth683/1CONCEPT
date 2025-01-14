const Attendee = require("../models/Attendee");
const Registration = require("../models/Registration");

// Add a new attendee
exports.addAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all attendees
exports.getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific attendee by ID
exports.getAttendeeById = async (req, res) => {
  try {
    const attendee = await Attendee.findById(req.params.id).populate("registrations");
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    }
    res.status(200).json(attendee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an attendee by ID
exports.updateAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    }
    res.status(200).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an attendee by ID
exports.deleteAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.findByIdAndDelete(req.params.id);
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    }
    res.status(200).json({ message: "Attendee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events attended by a specific attendee
exports.getEventsByAttendee = async (req, res) => {
  try {
    const registrations = await Registration.find({ attendee: req.params.id }).populate("event");
    if (!registrations || registrations.length === 0) {
      return res.status(404).json({ message: "No events found for this attendee" });
    }

    const events = registrations.map((registration) => registration.event);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
