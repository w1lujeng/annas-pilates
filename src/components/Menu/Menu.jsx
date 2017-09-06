import React from 'react';
import Add from 'react-icons/lib/fa/calendar-plus-o';
import Calender from 'react-icons/lib/fa/calendar'


 const Menu = () => (
  <nav className="navbar fixed-bottom">
      <h3><Calender /><a href="/activity">Activity</a></h3>
      {/* <li><a href="/workouts">Workouts</a></li> */}
      <h3><Add /><a href="/addworkout">Add workout</a></h3>
</nav>

)

export default Menu;

