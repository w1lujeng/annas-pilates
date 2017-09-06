import React, { Component } from 'react';
import { PropTypes} from 'react'
import {Link} from 'react-router-dom';
//not rendering
export class AddWorkout extends Component {
  render() {

    const {date, gym, reformer, mat} = this.props

    return (
  <div>
    <h1>Add a workout</h1>
    <form className="addWorkout">
      <label htmlFor="date">Date</label>
      <input id="date" 
             type="text" 
             required
             defaultValue={date} />

      <label htmlFor="gym">Gym</label>
      <input id="gym" 
             type="text" 
             required 
             defaultValue={gym} />
      
      <div>
        <label htmlFor="Reformer">Reformer</label>
        <input id="reformer" 
               type="checkbox" 
               defaultChecked={reformer}/>
      </div>

      <div>
        <label htmlFor="Reformer">Mat</label>
        <input id="mat" 
               type="checkbox" 
               defaultChecked={mat}/>
      </div>

    </form>
  </div>
    )
  }
}
  AddWorkout.defaultProps = {
    date: "09/09/17",
    gym: "Equinox",
    reformer: true,
    mat: false

  }

  AddWorkout.PropTypes = {
    date: PropTypes.string.isRequired,
    gym: PropTypes.string.isRequired,
    reformer: PropTypes.bool.isRequired,
    mat: PropTypes.bool.isRequired,
  }



export default AddWorkout;