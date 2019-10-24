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
  color: #191A2A;
  background-color: #E7E3D6;
  flex-direction: column;
  justify-content: center;

  h2 {
    align-self: center;
  }

  h3 {
    position: absolute;
    top: 110px;
    left: calc( 50% - 2.8rem );
  }

  .list-container {
    width: 400px;
    position: absolute;
    top: 150px;
    left: calc( 50vw - 200px );
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    border-radius: 0.6rem;
    box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);

    .link-wrapper {
      padding: 1rem;
      margin: 0.7rem;
      align-self: center;
      border-radius: 0.6rem;
      box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 12px rgba( 118, 158, 188, 0.8);
      }

      a {
        text-decoration: none;
      }
    }
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
            <div className='link-wrapper'><NavLink key={ event.id } to={ {
              pathname: `/events/${ event.name }`,
              state: {
                event: event
              }
            } }>{ event.name }</NavLink></div>
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