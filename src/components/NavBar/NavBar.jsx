import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <nav className="navbar">
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      
      
    </nav> :
    <nav className="navbar fixed-top" >
      
      <Link to="/login" className='NavBar-link glyphicon glyphicon-log-in'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link glyphicon glyphicon-user'>SIGN UP</Link>
    </nav>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );//return
};//component

export default NavBar;




