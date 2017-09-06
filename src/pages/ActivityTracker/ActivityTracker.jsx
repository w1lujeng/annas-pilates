import React, { Component } from 'react';
import Calender from 'react-icons/lib/fa/calendar'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'
import workoutService from '../../utils/workoutService'
export class ActivityTracker extends Component {
  constructor() {
    super();
    this.state = {
      workouts: []
    }
  }

  componentDidMount() {
    workoutService.getWorkoutsForUser()
    .then(workouts => this.setState({workouts}));
  }





  percentToDecimal(decimal) {
    return((decimal * 100) + '%')
  }

  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }

  render() {

    return (
      <div className="workouts">
        <div className="total-workouts">
          <span>{}</span>
          
        </div>
        <h3><Calender /> Reformer Workouts</h3>
        {this.state.workouts.filter(w => w.reformer).map((w, i) =>
          <div key={i} className="reformer">
            <p>{w.date}</p>
            <p>{w.gym}</p>
            <p>{w.mat}</p>
            <p>{w.reformer}</p>
          </div>
        )}
        <h3><Calender /> Mat Workouts</h3>
        {this.state.workouts.filter(w => w.mat).map((w, i) =>
          <div key={i} className="mat">
            <p>{w.date}</p>
            <p>{w.gym}</p>
            <p>{w.mat}</p>
            <p>{w.reformer}</p>
          </div>
        )}
        <div className="goal">
          <h3> You've reached   
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )} of your goal <ThumbsUp />
            </h3>
            
        </div>
      </div>
    )
  }

}


export default ActivityTracker;
