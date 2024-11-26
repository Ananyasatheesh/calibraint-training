const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blogContent: {
    type: String,
    required: true,
  },
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  }
});
module.exports = mongoose.model('Blog',blogSchema);