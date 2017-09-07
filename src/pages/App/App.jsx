import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import userService from '../../utils/userService';

import AboutPage from '../AboutPage/AboutPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ActivityTracker from '../ActivityTracker/ActivityTracker'

import AddWorkout from '../AddWorkout/AddWorkout';
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar';
// import Calender from 'react-icons/lib/fa/calendar';
// import ThumbsUp from 'react-icons/lib/ti/thumbs-up';
// import Workouts from '../Workouts/Workouts';
// import workoutService from '../../utils/workoutService'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser()
    }
  }

  /*---------- Callback Methods ----------*/
          /*-------- Auth --------*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {


  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>Welcome to Anna's Pilates</h1>
        </div>
        
          <Router>
            <div>
            <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
            
            <Switch>
              
              <Route exact path='/' render={
                () =>
                  <AboutPage                          
                  />
                }/>  

              <Route exact path='/signup' render={(props) => 
                <SignupPage                               
                {...props}
                  handleSignup={this.handleSignup}
                />
              }/> 

              <Route exact path='/login' render={(props) => 
                <LoginPage
                  // user={this.state.user}
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              

              //if user is logged in
              <Route exact path='/addworkout' render={(props) => 
                <AddWorkout history={props.history}
                />
              }/>

              <Route exact path='/activity' render={(props) => 
                <ActivityTracker workouts={this.state.workouts}
                />
              }/> 


              {/* <Route exact path='/workouts' render={(props) => 
                <Workouts days={[]}
                />
              }/>    */}

          }         
          </Switch>
          <Menu />
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
