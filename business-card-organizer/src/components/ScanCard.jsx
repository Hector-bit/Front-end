// scan cards qr code then display the card
import React from 'react';
import QrReader from 'react-qr-reader';

import Header from './Header';


const ScanCard = ( props ) => {

  const scan = {
    result: 'No result'
  }

  const handleScan = data => {
    
    if ( data ) {
      props.history.push( {
        pathname: '/scan-result',
        state: { data: data, user: props.user }
      } );
    }
  }


  const handleError = err => {
    console.error( err );
  }

  return (
    <div>
      <Header user={ props.user } />
      <QrReader
          delay={ 300 }
          onError={ handleError }
          onScan={ handleScan }
          style={{ width: '70%', position: 'absolute', top: '120px', left: '15%' }}
        />
    </div>
  );
};

export default ScanCard;