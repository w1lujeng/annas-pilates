const Workout = require('./../models/singleWorkout')
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function create(req, res) {
  console.log('req.body =', req.body)
  Workout.create(req.body)
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json({error: err});
  });
}


module.exports = {
  create
}
