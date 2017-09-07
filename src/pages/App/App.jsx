import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
        <div className="jumbotron-container">
          <div className="jumbotron">
            <div className="container text-center">
              <h1>Welcome to Anna's Pilates</h1>
              <p>Pilates and personal training</p>
            </div>
          </div>
        </div>
            
            {/* navbar */}
          <Router>
            <div className="about col-md-10 col-md-push-1">
                <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
                
                <Switch>
                  
                  <Route exact path='/' render={
                    () =>
                      <AboutPage                          
                      />
                    }/>  
                  <Route exact path='/about' render={
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
                
              
               {/* fucntionality */}

              <Route exact path='/addworkout' render={(props) => (
                userService.getUser() ?
                < AddWorkout history={props.history} />
                :
                <Redirect to ='./login' />
              )}/>

              <Route exact path='/activity' render={(props) => (
                userService.getUser() ?
                <ActivityTracker workouts={this.state.workouts} />
                :
                <Redirect to ='./login' />
              )}/> 

          }         
          </Switch>

          <footer className="container-fluid text-center">
            <Menu />
          </footer>

          
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
