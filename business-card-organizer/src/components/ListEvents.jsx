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

  h3 {
    position: absolute;
    top: 110px;
    left: calc( 50% - 2.8rem );
  }

  .list-container {
    width: 70%;
    position: absolute;
    top: 150px;
    left: 15%;
    text-align: center;
    margin: 1rem auto;
    box-shadow: 0 0 8px rgba( 33, 33, 33, 0.17 );
  }
`;

const ListEvents = ( props ) => {
  if ( props.user.events.length > 0 ) {
    return (
      <StyledPage className='page-container'>
        <Header user={ props.user } />
        <NavLink to='/create-event'><h3>create</h3></NavLink>
        <div className='list-container'>
        {
          props.user.events.map( event => (
            <NavLink key={ event.id } to={ {
              pathname: `/events/${ event.name }`,
              state: {
                event: event
              }
            } }>{ event.name }</NavLink>
          ))
        }
        </div>
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