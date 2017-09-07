import React, { Component } from 'react';
import Calender from 'react-icons/lib/fa/calendar';
import ThumbsUp from 'react-icons/lib/ti/thumbs-up';
import workoutService from '../../utils/workoutService';
import API from '../../API/API';
import './ActivityTracker.css'



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

  // var GoalProgress =
  // {this.calcGoalProgress(
  //   this.state.workouts.length
  // )}

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
      <div>            
            <div className="row">    
              <div className="col-lg-6 text-center">         
                <h2><Calender /> Reformer Workouts</h2>
                {this.state.workouts.filter(w => w.reformer).map((w, i) =>
                  <div key={i} >
                    <p>{w.date}
                      
                      
                      </p>
                    <p>{w.gym}</p>
                    <p>{w.mat}</p>
                    <p>{w.reformer}</p>
                    <button type="submit" className="btn btn-danger btn-sm" onClick={() => this.deleteThisWorkout(w)}>
                    <span className="glyphicons glyphicons-remove-circle"></span></button>
                  </div>//reformer

                )}
                </div>

              <div className="col-lg-6 text-center">         
                <h2><Calender /> Mat Workouts</h2>
                {this.state.workouts.filter(w => w.mat).map((w, i) =>
                  <div key={i} className="col-lg-6">
                    <p>{w.date}</p>
                    <p>{w.gym}</p>
                    <p>{w.mat}</p>
                    <p>{w.reformer}</p>
                    <button type="submit" className="btn btn-danger btn-sm" onClick={() => this.deleteThisWorkout(w)}>
                    <span className="glyphicons glyphicons-remove-circle"></span></button>
                  </div>//mat
                  )}
            </div>
          </div>

            

          <footer className="footer-stats">
            <span> You've reached  
              &nbsp;&nbsp;
              {this.calcGoalProgress(
                this.state.workouts.length
              )}
              &nbsp;&nbsp;
            of your goal <ThumbsUp />
            </span>        
          </footer>        
        </div>
    )//return
  }//render
}//component

export default ActivityTracker;
