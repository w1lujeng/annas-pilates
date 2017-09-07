import React from 'react';
import Add from 'react-icons/lib/fa/calendar-plus-o';
import Calender from 'react-icons/lib/fa/calendar'


 const Menu = () => (
    
    <nav className="navbar navbar-default navbar-fixed-bottom navbar-inverse" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Anna's Pilates</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" role="search">
            <div className="form-group">            
        </div>
        
        <button type="submit" className="btn btn-default"><Calender /><a href="/activity">Activity</a></button>
        <button type="submit" className="btn btn-default"><Add /><a href="/addworkout">Add workout</a></button>
        </form>
    </div>
    </nav>

)

export default Menu;

