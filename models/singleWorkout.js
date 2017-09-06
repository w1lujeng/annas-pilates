var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
  gym: String,
  date: Date,
  reformer: Boolean,
  mat: Boolean
}, {
  timestamps: true
});


module.exports = mongoose.model('singleWorkout', workoutSchema);