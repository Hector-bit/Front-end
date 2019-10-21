import React from 'react';
import styled from 'styled-components';

import GetQRCode from './GetQRCode';

const StyledPage = styled.div.attrs( props => ({
  className: 'page',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div.attrs( props => ({
  className: 'card',
}))`
  width: 80%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  box-shadow: 0 0 8px rgba( 33, 33, 33, 0.17);

  summary {
    text-align: center;
    border-top: 1px solid rgba( 33, 33, 33, 0.17);
    padding-top: 1rem;
  }

  details textarea{
    width: 99%;
    margin-top: 1rem;
  }
`;

const StyledContent = styled.div.attrs( props => ({
  className: 'card-content',
}))`
  width: 100%;
  display: flex;
  padding-bottom: 1rem;

  img {
    width: 33%;
    box-shadow: 0 0 8px rgba( 33, 33, 33, 0.17);
  }

  ul {
    width: 50%;
    list-style-type: none;
  }

  .code-container {
    width: 15%;
    align-self: flex-end;

    img {
      width: 100%;
    }
  }
`;

const Card = ( props ) => {
  const user = props.user

  return (
    <StyledPage className='page'>
      <StyledCard className='card'> {/* container flex column */}
        <StyledContent className='card-content'>
          <img src={ user.img } alt='' />
          <ul>
            <li>{ user.card.name    }</li>
            <li>{ user.card.email   }</li>
            <li>{ user.card.phone   }</li>
            <li>{ user.card.website }</li>
          </ul>
          <div className='code-container'>
            <GetQRCode user={ user } setCurrentUser={ props.setCurrentUser } />
          </div>
        </StyledContent>
        <details>
          <summary>Notes:</summary>
          <textarea rows='4'>{user.card.notes}</textarea>
        </details>
      </StyledCard>
    </StyledPage>
  );
};

export default Card;
