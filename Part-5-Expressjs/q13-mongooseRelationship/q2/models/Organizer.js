const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: String,
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = mongoose.model("Organizer", organizerSchema);
