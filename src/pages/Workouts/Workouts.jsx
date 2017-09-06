import React from 'react'
import WorkoutsRow from '../../components/WorkoutsRow/WorkoutsRow'
import {Link} from 'react-router-dom';

export const Workouts  = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/reformer || mat/)) ? days:
      days.filter(day => day[filter])
  return (
    <div className="workoutsList" >
      <table>
        <thead>
          <tr colSpan={4}>
            <th>Date |</th>
            <th>Gym |</th>
            <th>Reformer |</th>
            <th>Mat</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="workouts">
                Date
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="gym">
                Gym
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="/workouts/reformer">
                Reformer 
              </Link>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to="/workouts/mat">
                Mat 
              </Link>
              <li></li>
              <li></li>

            </td>
            
          </tr>
        </thead> 
        <tbody>
          {filteredDays.map((day, i) =>
            <WorkoutsRow key={i}
                            {...day}
            />
            )}
        </tbody>
      </table>
    </div>
  )
}
export default Workouts

