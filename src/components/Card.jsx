import React from 'react';
import styled from 'styled-components';

import GetQRCode from './GetQRCode';
import CreateQRCode from './CreateQRCode';


const StyledCard = styled.div.attrs( props => ({
  className: 'card',
}))`
  width: 80%;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  padding: 1rem;
  margin: 2rem;
  color: #191A2A;
  background-color: white;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);

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
    box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);
  }

  ul {
    width: 50%;
    text-align: left;
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

  const user = props.user;
  const card = props.card ? props.card : user.card;

  const company = card.company;
  const name    = card.name;
  const email   = card.email;
  const phone   = card.phone;
  const website = card.website;
  const codeUrl = card.codeUrl;
  const notes   = card.notes;

  const code = codeUrl === 'testing'
  ? <CreateQRCode user={ user    } setCurrentUser={ props.setCurrentUser } />
  : <GetQRCode codeUrl={ codeUrl } />;

  return (
    <StyledCard className='card'>
      <StyledContent className='card-content'>
        <img src={ card.img } alt='' />
        <ul>
          <li>{ company }</li>
          <li>{ name    }</li>
          <li>{ email   }</li>
          <li>{ phone   }</li>
          <li>{ website }</li>
        </ul>
        <div className='code-container'>
          { code }
        </div>
      </StyledContent>
      <details>
        <summary>Notes:</summary>
        <textarea rows='4'>{card.notes}</textarea>
      </details>
    </StyledCard>
  );
};

export default Card;
