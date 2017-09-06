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
import Workouts from '../Workouts/Workouts';
import AddWorkout from '../AddWorkout/AddWorkout';
import Menu from '../../components/Menu/Menu';
import NavBar from '../../components/NavBar/NavBar'
import Calender from 'react-icons/lib/fa/calendar'
import ThumbsUp from 'react-icons/lib/ti/thumbs-up'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  /*---------- Callback Methods ----------*/
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
    let user = userService.getUser();
    this.setState({user});
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
              
              <Route exact path='/addworkout' render={(props) =>
                <AddWorkout 
                />
              }/>

              <Route exact path='/activity' render={(props) => 
                <ActivityTracker total={"5"}
                                reformer={"3"}
                                mat={"2"}
                                goal={"100"}
                />
              }/> 


              <Route exact path='/workouts' render={(props) => 
                <Workouts days={
                  [
                    {
                      date: new Date("9/1/2017"),               gym: "Equinox",
                      reformer: true,
                      mat: false
                    },
                    {
                      date: new Date("9/2/2017"),
                      gym: "Balanced Concepts Pilates",
                      reformer: true,
                      mat: false
                    },
                    {
                      date: new Date("9/3/2017"),
                      gym: "Core Align Studios",
                      reformer: false,
                      mat: true
                    },
                    {
                      date: new Date("9/4/2017"),
                      gym: "Mission street Yoga",
                      reformer: true,
                      mat: false
                    },
                  ]
                }
                />
              }/>   

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
