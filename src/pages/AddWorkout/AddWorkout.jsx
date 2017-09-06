import React, { Component } from 'react';
import API from '../../API/API'

export class AddWorkout extends Component {
  constructor () {
    super() 
    this.state = {
      date: "",
      gym: "",
      reformer: false,
      mat: false
    }
  }

  updateDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  updateGym = (e) => {
    this.setState({
      gym: e.target.value
    })
  }  

  updateReformer = (e) => {
    this.setState({
      reformer: e.target.value
    })
  }

  updateMat = (e) => {
    this.setState({
      mat: e.target.value
    })
  }

  addWorkout(e) {
    console.log('add workout')
    console.log('this.state =', this.state)
    e.preventDefault()
    API.fetchAddWorkout(this.state)
        .then((workout) => {
          console.log("workout =", workout)
            this.setState({
              workout
            })
        })
        .catch(err => {
          console.log('err =', err)
        })
  }

  render() {
    return (
  <div>
    <h1>Add a workout</h1>
    <form className="addWorkout" onSubmit={(e)=>{this.addWorkout(e)}}>
      <label htmlFor="date">Date</label>
      <input id="date" 
             type="text" 
             required
             defaultValue={"06-06-1966"} 
                onChange={(e)=>{this.updateDate(e)}}
                value={this.props.newDate}/>

      <label htmlFor="gym">Gym</label>
      <input id="gym" 
             type="text" 
             required 
             defaultValue={this.state.gym} 
                onChange={(e)=>{this.updateGym(e)}}
                value={this.props.newGym}/>
      
      <div>
        <label htmlFor="Reformer">Reformer</label>
        <input id="reformer" 
               type="checkbox" 
               defaultChecked={this.reformer}/>
      </div>

      <div>
        <label htmlFor="Reformer">Mat</label>
        <input id="mat" 
               type="checkbox" 
               defaultChecked={this.mat}/>
      </div>
      
      <button type="submit">Add Workout</button>
    </form>
  </div>
    )
  }
}
  

export default AddWorkout;