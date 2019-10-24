import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Card from './Card';
import Header from './Header';


const StyledPage = styled.div.attrs( props => ({
  className: 'page',
}))`
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #191A2A;
  background-color: #E7E3D6;
  flex-direction: column;
  justify-content: center;

  a {
    align-self: center
    text-decoration: none;
  }
`;

const CardContainer = ( props ) => {

  return (
    <StyledPage className='page'>
      <Header user={ props.user } />
      <NavLink to='/edit-card'><h3>Edit</h3></NavLink>
      <Card user={ props.user } card={ props.card } setCurrentUser={ props.setCurrentUser } />
    </StyledPage>
  );
};

export default CardContainer;
