// scan cards qr code then display the card
import React from 'react';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';

import Header from './Header';

const StyledPage = styled.div.attrs( props => ({
  className: 'page',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  color: #191A2A;
  background-color: #1C1C1C;
  flex-direction: column;
  justify-content: center;
`;

const StyledContainer = styled.div.attrs( props => ({
  className: 'reader-container',
}))`
  display: flex;
  justify-content: space-around;
  align-self: center;
`;

const ScanCard = ( props ) => {

  const handleScan = data => {
    
    if ( data ) {
      props.history.push( {
        pathname: '/scan-result',
        state: {
          data: data
        }
      } );
    }
  }


  const handleError = err => {
    console.error( err );
  }

  return (
    <StyledPage className='page'>
      <Header user={ props.user } />
      <StyledContainer className='reader-container'>
        <QrReader
          delay={ 300 }
          onError={ handleError }
          onScan={ handleScan }
          style={{ width: '400px', background: '#59667A' }}
        />
        </StyledContainer>
    </StyledPage>
  );
};

export default ScanCard;