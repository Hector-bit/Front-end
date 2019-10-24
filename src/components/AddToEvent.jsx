import React from 'react';



import styled from 'styled-components';

const StyledForm = styled.form`
  width: 80%;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledFieldset = styled.fieldset`
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);
`;

const StyledLabel = styled.label`
  margin: 1rem;
`;

const StyledSelect = styled.select`
  margin-left: 0.8rem;
`;

const AddToEvent = ( props ) => {
  
  const handleChanges = ( evt ) => {
    evt.preventDefault();

    let event;

    const eventName = evt.target.value;

    const editedUser = { ...props.user };

    editedUser.events.forEach( e => {
      if ( e.name === eventName ) { e.cards.push( props.card ); event = e }; 
    } );

    props.setCurrentUser( editedUser );
    props.history.push( {
      pathname: `/events/{ eventName }`,
      state: {
        event: event
      }
    } );

  };

  return (
    <StyledForm>
      <StyledFieldset>
        <StyledLabel>
          Add to Event:
          <StyledSelect
            id  ='events'
            name='events'
            value   = ''
            onChange={ handleChanges }>

            <option />
            {
              props.user.events.map( event =>
                <option key={ event.id }>{ event.name }</option>
              )
            }
          </StyledSelect>
        </StyledLabel>
      </StyledFieldset>

    </StyledForm>
  );
};

export default AddToEvent;
