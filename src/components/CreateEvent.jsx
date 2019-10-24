// return new event array to store cards

import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import uuid from 'uuid';

import Header from './Header';


const StyledPage = styled.div.attrs( props => ({
  className: 'create',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  color: #191A2A;
  background-color: #E7E3D6;
  flex-direction: column;
  justify-content: center;
`;

const StyledForm = styled.div.attrs( props => ({
  className: 'user-form',
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
`;

const StyledFields = styled.div.attrs( props => ({
  className: 'form-field-wrapper',
}))`

  display: flex;
  padding: 1rem;
  margin: 0 auto;
  flex-direction: column;

  input, button {
    margin: 0.4rem;
    font-size: 1.6rem;
  }
`;

const CreateEvent = ( { values, touched, errors, status, setCurrentUser, user } ) => {


  return (
    <StyledPage className='create'>
      <Header user={ user } />
      <StyledForm className='user-form'>
      <h1>New Event:</h1>
      <Form>
        <StyledFields className='form-field-wrapper'>
        <Field
          type = 'text'
          name = 'name'
          placeholder = 'Event Name' />
        { touched.name && errors.name && (
          <p className = 'error'>{ errors.name }</p>
        )}

        <button type="submit">Submit</button>
        </StyledFields>
      </Form>
      </StyledForm>
    </StyledPage>
  );
};

const FormikCreateEvent = withFormik( {
  enableReinitialize: true,
  mapPropsToValues( { user } ) {
    return {
      name: '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string ().required(),
  }),
  handleSubmit( values, { props, resetForm } ) {
    values.cards = [];
    values.id    = uuid.v4();
    
    const updatedUser = { ...props.user };
    updatedUser.events.push( { ...values } );

    props.setCurrentUser( updatedUser );

    resetForm();

    props.history.push('/events');
   }
} ) ( CreateEvent );

export default FormikCreateEvent;
