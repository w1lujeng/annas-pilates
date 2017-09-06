var express = require('express');
var router = express.Router();
var workoutCtrl = require('../../controllers/workouts');
var Workout = require('../../models/workout');
/*---------- Protected Routes ----------*/
// index and workouts? //check aouth
router.get('/', workoutCtrl.index);
router.post('/', workoutCtrl.create);
router.delete('/:id', workoutCtrl.deleteWorkout);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;