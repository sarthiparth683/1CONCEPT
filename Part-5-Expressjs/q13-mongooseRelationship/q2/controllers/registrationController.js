const Registration = require('../models/Registration');
const Event = require('../models/Event');
const Attendee = require('../models/Attendee');

// Add a new registration
exports.addRegistration = async (req, res) => {
  try {
    const { event, attendee } = req.body;

    // Check if the attendee is already registered for the event
    const existingRegistration = await Registration.findOne({ event, attendee });
    if (existingRegistration) {
      return res.status(400).json({ message: 'Attendee is already registered for this event' });
    }

    // Create a new registration
    const registration = await Registration.create({
      event,
      attendee, 
      registration_date: new Date(),
    });

    // Add the registration to the event and attendee
    await Event.findByIdAndUpdate(event, { $push: { attendees: registration._id } });
    await Attendee.findByIdAndUpdate(attendee, { $push: { registrations: registration._id } });

    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all registrations
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate('event', 'title date location')
      .populate('attendee', 'name email');
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific registration by ID
exports.getRegistrationById = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
      .populate('event', 'title date location')
      .populate('attendee', 'name email');
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a registration by ID
exports.deleteRegistration = async (req, res) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    // Remove the registration from the associated event and attendee
    await Event.findByIdAndUpdate(registration.event, { $pull: { attendees: registration._id } });
    await Attendee.findByIdAndUpdate(registration.attendee, { $pull: { registrations: registration._id } });

    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
