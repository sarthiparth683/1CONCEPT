const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }], // Array of ObjectId references
});

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = BlogModel;


//-------------------------------------------------------------

// {
//   "title": "My First Blog",
//   "description": "This is a blog about coding.",
//   "user": "64f7c8b2f3b8c72f889a1234", 
//   "tags": ["64f7c8d2f3b8c72f889a5678", "64f7c8d2f3b8c72f889a5679"]
// }
