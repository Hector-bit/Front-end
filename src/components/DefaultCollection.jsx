// receives event array and displays cards from event

import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import Header from './Header';
import Card   from './Card';

const StyledPage = styled.div.attrs( props => ({
  className: 'page-container',
}))`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .event-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 100px;
    margin: 1rem auto;

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 70%;
      margin: 0 auto;
      box-shadow: 0 0 8px rgba( 33, 33, 33, 0.17);
    }
  }
`;

const DefaultCollection = ( props ) => {

  const user  = props.user;

  const tempArray = []; // stand in for user.defaultCollection
  const max_cards = 10;

  for ( let i = 0; i < max_cards; i++ ) {
    tempArray.push( user.card );
  }
  

  return (
    <StyledPage className='page-container'>
      <Header user={ user } />
      <div className='event-container'>
        <h3>My Collection</h3>
        <div className='card-container'>
        {
          tempArray.map( card => (
            <Card key={ uuid.v4() } user={ user } card={ card } />
          ))
        }
        </div>
      </div>
    </StyledPage>
  );
};

export default DefaultCollection;