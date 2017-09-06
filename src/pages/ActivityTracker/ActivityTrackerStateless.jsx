import React, { Component } from 'react';

const percentToDecimal = (decimal) => {
    return((decimal * 100) + '%')
  }
 const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

export const ActivityTracker = (total, goal, reformer, mat) => (
      <div className="workouts">
        <div className="total-workouts">
          <span>{total}</span>
        </div>
        <div className="reformer">
          <span>{reformer}</span>
        </div>
        <div className="mat">
          <span>{mat}</span>
        </div>
        <div className="goal">
          <span>
            {this.calcGoalProgress(
              total,
              goal
            )}
            </span>
        </div>
      </div>
    )



export default ActivityTracker;