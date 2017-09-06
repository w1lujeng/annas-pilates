
export const ActivityTracker = createClass({
  getDefaultProps() {
    return {
      total: 6,
      reformer: 3,
      mat: 3,
      goal: 10
    }
  },
  percentToDecimal(decimal) {
    return((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="workouts">
        <div className="total-workouts">
          <span>{this.props.total}</span>
          {/* <Calender /> */}
          <span> Days</span>
        </div>
        <div className="reformer">
          <span>{this.props.reformer}</span>
          <span> Reformer Workouts</span>
        </div>
        <div className="mat">
          <span>{this.props.mat}</span>
          <span> Mat Workouts</span>
        </div>
        <div className="goal">
          <span> You've reached   
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )} of your goal 
            </span>
        </div>
      </div>
    )
  }

}

import React, { Component } from 'react';
// import Calender from 'react-icons/lib/fa/calender'

export class ActivityTracker extends Component {
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
          <span>{this.props.total}</span>
          {/* <Calender /> */}
          <span> Days</span>
        </div>
        <div className="reformer">
          <span>{this.props.reformer}</span>
          <span> Reformer Workouts</span>
        </div>
        <div className="mat">
          <span>{this.props.mat}</span>
          <span> Mat Workouts</span>
        </div>
        <div className="goal">
          <span> You've reached   
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )} of your goal 
            </span>
        </div>
      </div>
    )
  }

}


export default ActivityTracker;

