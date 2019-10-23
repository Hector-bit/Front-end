import React from 'react';

const GetQRCode = ( props ) => {

  return (
    <img src={ props.codeUrl } alt='QR Code' />
  );
};

export default GetQRCode;
