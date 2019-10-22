// list all events in events array

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const StyledPage = styled.div.attrs( props => ({
  className: 'page-container',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a, h2 {
    align-self: center;
  }
`;

const ListEvents = ( props ) => {
  if ( props.user.events.length > 0 ) {
    return (
      <StyledPage className='page-container'>
        <Header user={ props.user } />
        {
          props.user.events.map( event => (
            <NavLink key={ event.id } to={ {
              pathname: `/events/${event.name }`,
              state: {
                event: event
              } } }>{ event.name }</NavLink>
          ))
        }
      </StyledPage>
    );
  } else {
    return (
      <StyledPage className='page-container'>
        <Header user={ props.user } />
        <h2>You have no events.   Would you like to <NavLink to='/create-event'>create</NavLink> an event?</h2>
      </StyledPage>
    )
  }
};

export default ListEvents;