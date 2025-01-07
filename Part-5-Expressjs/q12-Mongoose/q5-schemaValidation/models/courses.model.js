// Validation Types in Mongoose:
// Required: Ensures a field is present in the document.
// Default: Provides a default value if none is specified.
// Min and Max: Restrict numeric fields to a range of values.
// Enum: Limits the field values to a predefined set.
// Custom Validators: Allow custom logic to validate field values.

const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Field must be provided
  },
  age: {
    type: Number,
    min: 0, // Age must be positive
    max: 120, // Age must be realistic
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Field must be either 'user' or 'admin'
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default value if not provided
  },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
});

const coursesModel = mongoose.model("courses", coursesSchema);

module.exports = { coursesModel };
