const Workout = require('../models/workout')
const User = require('../models/user')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function create(req, res) {
  console.log('req.body =', req.body)
  Workout.create(req.body)
  .then(workout => {
    User.findById(req.user._id).then(user => {
      user.workouts.push(workout._id)
      user.save(function() {
        res.json(workout);
      })  
    });   
  })
  .catch(err => {
    res.json({error: err});
  });
}

function index(req, res) {
  User.findById(req.user._id).populate('workouts')
  .then(user => {
    res.json(user.workouts);
  });
}

// function deleteWorkout(req, res) {
//   Workou.findById(req.params.id, (err, workout) => {
//     workout.remove();
//     res.redirect('/workouts');
//   });
// }

module.exports = {
  create,
  index
}
