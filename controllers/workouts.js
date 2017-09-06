const Workout = require('../models/workout')
const User = require('../models/user')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function create(req, res) {
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
}//create

function index(req, res) {
  User.findById(req.user._id).populate('workouts')
  .then(user => {
    res.json(user.workouts);
  });
}//index

function deleteWorkout(req, res) {
  User.findById(req.user._id, (err, user) => {
    user.workouts.remove(req.params.id);
    user.save(err => {
      res.status(200).json(err);
    })
  })
}//delete


module.exports = {
  create,
  index,
  deleteWorkout
}
