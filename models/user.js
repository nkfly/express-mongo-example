// Load required packages
var mongoose = require('mongoose');

// Define our user schema
// schema types http://mongoosejs.com/docs/schematypes.html
var UserSchema   = new mongoose.Schema({
  name: String,
  money: Number,
  GPA : Number,
  skill: Array
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);