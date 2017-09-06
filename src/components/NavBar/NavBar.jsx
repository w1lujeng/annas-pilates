import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div> :
    <div >
      <Link to="/activity" className='NavBar-link' >About Page</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/login" className='NavBar-link glyphicon glyphicon-log-in'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link glyphicon glyphicon-user'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;




