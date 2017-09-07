import React, { Component } from 'react';
import Calender from 'react-icons/lib/fa/calendar';
import ThumbsUp from 'react-icons/lib/ti/thumbs-up';
import workoutService from '../../utils/workoutService';
import API from '../../API/API';

class ActivityTracker extends Component {
  constructor() {
    super();
    this.state = {
      workouts: []
    };
  }

  componentDidMount() {
    workoutService.getWorkoutsForUser()
    .then(workouts => this.setState({workouts}));
  }

  percentToDecimal(decimal) {
    return((decimal * 100) + '%');
  }

  calcGoalProgress(workouts) {

    return this.percentToDecimal(workouts/20);
  }

  deleteThisWorkout(workout) {
    console.log(workout)
    var idx = this.state.workouts.findIndex(w => w._id === workout._id);
    this.setState({
      // makes a new array up to the deletion and concats with what comes after
      workouts: this.state.workouts.slice(0, idx).concat(this.state.workouts.slice(idx+1))
    })
    API.fetchDeleteWorkout(workout);
  }

  render() {

    return (
      <div className="workouts">
        
        <div className="total-workouts" ></div>
       
          <h3><Calender /> Reformer Workouts</h3>
          {this.state.workouts.filter(w => w.reformer).map((w, i) =>
            <div key={i} className="reformer">
              <p>{w.date}</p>
              <p>{w.gym}</p>
              <p>{w.mat}</p>
              <p>{w.reformer}</p>
              <button type="submit" className="btn btn-danger" onClick={() => this.deleteThisWorkout(w)}>
              Delete Workout</button>
            </div>//reformer
          )}
        
          <h3><Calender /> Mat Workouts</h3>
          {this.state.workouts.filter(w => w.mat).map((w, i) =>
            <div key={i} className="mat">
              <p>{w.date}</p>
              <p>{w.gym}</p>
              <p>{w.mat}</p>
              <p>{w.reformer}</p>
              <button type="submit" className="btn btn-danger" onClick={() => this.deleteThisWorkout(w)}>
                Delete Workout</button>mat
            </div>//mat
          )}

          <div className="goal">
            <span> You've reached  
              <span> </span> 
              {this.calcGoalProgress(
                this.state.workouts.length
              )}
              <span> </span>
            of your goal <ThumbsUp />
            </span>>        
        </div>
      

      </div>
    )//return
  }//render
}//component

export default ActivityTracker;
