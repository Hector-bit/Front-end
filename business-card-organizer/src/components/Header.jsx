// header to display after successful login
// view card: edit, delete: back to CreateCard??
// list events: display, create new
// account: editable details, editable card

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from './img/bco.png';

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px rgba( 33, 33, 33, 0.17);
  background-color: white;
  z-index: 1;

  a {
    align-self: center;
  }

  .logo-container {
    width: 100px;

    img {
      width: 100%;
    }
  }
`;

const Header = ( props ) => {

  return (
    <StyledHeader>
      <div className='logo-container'>
        <img src={ logo } alt='logo' />
      </div>
      <NavLink to='/card'    activeClassName='link'>Card</NavLink>
      <NavLink to='/events'  activeClassName='link'>Events</NavLink>
      <NavLink to='/scan'    activeClassName='link'>Scan</NavLink>
      <NavLink to='/account' activeClassName='link'>Account</NavLink>
    </StyledHeader>
  );
}

export default Header;