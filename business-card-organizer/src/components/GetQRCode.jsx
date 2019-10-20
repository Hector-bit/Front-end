import React, { useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';

const CreateQRCode = ( props ) => {

  const codeLens = R.lensPath(
    ['card', 'codeUrl']
  );

  useEffect( () =>{
    if ( !props.user.card.codeUrl ) {
      axios
        .get( `https://api.qrserver.com/v1/create-qr-code/?data=${props.user.card.website}&format=svg` )
        .then( response => {
          props.setCurrentUser( R.set( codeLens, response.config.url, props.user ) );
        })
        .catch(error => {
          console.error( error );
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <img src={ props.user.card.codeUrl } alt='' />
  );
};

export default CreateQRCode;
