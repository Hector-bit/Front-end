import React from 'react';

const AddToDefault = ( props ) => {

  const submitHandlr = () => {
    const editedUser = { ...props.user };
    editedUser.defaultCollection.push( props.card );
    props.setCurrentUser( editedUser );
    props.history.push( '/default' );
  }

  return (
    <button onClick={ submitHandlr }>Add to Default</button>
  );
};

export default AddToDefault;
