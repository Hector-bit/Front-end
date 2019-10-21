// header to display after successful login
// view card: edit, delete: back to CreateCard??
// list events: display, create new
// account: editable details, editable card

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ( props ) => {

  return (
    <header>
      <div className='logo-container'>
        <img src='' alt='' />
      </div>
      <NavLink to='/card'    activeClassName='link'>Card</NavLink>
      <NavLink to='/events'  activeClassName='link'>Events</NavLink>
      <NavLink to='/account' activeClassName='link'>Account</NavLink>
    </header>
  );
}

export default Header;