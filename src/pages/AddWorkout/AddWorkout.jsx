import React, { Component } from 'react';
import API from '../../API/API'
import AddWorkoutButton from 'react-icons/lib/fa/plus'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export class AddWorkout extends Component {
  constructor () {
    super() 
    this.state = {
      date: moment(),
      gym: "",
      reformer: false,
      mat: false
    }
  }


  updateDate = (momentDate) => {
    this.setState({
      date: momentDate
    })
  }

  updateGym = (e) => {
    this.setState({
      gym: e.target.value
    })
  }  

  updateReformer = (e) => {
    this.setState({
      reformer: e.target.checked
    })
  }

  updateMat = (e) => {
    this.setState({
      mat: e.target.checked
    })
  }

  //new
  updateWorkout = (e) => {
    this.setState({
      
    })
  }

  addWorkout(e) {
    e.preventDefault()
    API.fetchAddWorkout(this.state)
        .then((workout) => {
          this.props.history.push('/activity');

        })
        .catch(err => {
          console.log('err =', err)
        })
  }

  deleteWorkout(e) {
    e.preventDefault()
    API.fetchDeleteWorkout(this.state)
        .then((workout) => {
          this.props.history.push('/activity');

        })
        .catch(err => {
          console.log('err =', err)
        })
  }


  render() {
    return (
  <div>
    <h1></h1>
    <form className="addWorkout" onSubmit={(e)=>{this.addWorkout(e)}}>




      <label htmlFor="date">Date</label>
      <DatePicker
        id="date" 
        selected={this.state.date}
        onChange={(e) => this.updateDate(e)}
      />
                
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
                onChange={(e)=>{this.updateReformer(e)}}
                checked={this.state.reformer}
        />
      </div>
      <div>
        <label htmlFor="Reformer">Mat</label>
        <input id="mat" 
               type="checkbox" 
                onChange={(e)=>{this.updateMat(e)}}
                checked={this.state.mat}
        />
      </div>
      
      <button type="submit" className="btn btn-success"><AddWorkoutButton/></button>
      
    </form>
  </div>
    )
  }
}
  

export default AddWorkout;