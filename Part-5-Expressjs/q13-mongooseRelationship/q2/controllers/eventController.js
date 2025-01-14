const Event = require('../models/Event');
const Registration = require('../models/Registration');

// Add a new event
exports.addEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'name contact_info');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizer', 'name contact_info')
      .populate('attendees');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all attendees for a specific event
exports.getAttendeesByEvent = async (req, res) => {
  try {
    const registrations = await Registration.find({ event: req.params.id }).populate('attendee');
    if (!registrations || registrations.length === 0) {
      return res.status(404).json({ message: 'No attendees found for this event' });
    }

    const attendees = registrations.map((registration) => registration.attendee);
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
