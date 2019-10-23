import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const StyledPage = styled.div.attrs( props => ({
  className: 'scanned-container',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledP = styled.p`
  align-self: center;
  justify-content: center;
`;

const HandleScanResults = ( props ) => {
  const { data, user } = props.location.state;


  // TODO find the codeUrl and get matching user info to fill out card
  //   :  add card to chosen collection

  return (
    <StyledPage className='scanned-container'>
      <Header user={ user } />
      <StyledP>{ data }</StyledP>
    </StyledPage>
  );
}

export default HandleScanResults;