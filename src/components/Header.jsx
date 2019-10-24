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
  box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);
  background-color: #E7E3D6;
  z-index: 1;

  a {
    align-self: center;
    text-decoration: none;
    padding: 1rem;
    border-radius: 0.8rem;

    &:hover {
      box-shadow: 0 0 12px rgba( 118, 158, 188, 0.5);
    }
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