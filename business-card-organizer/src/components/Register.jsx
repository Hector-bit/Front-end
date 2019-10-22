import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import uuid from 'uuid';


const StyledPage = styled.div.attrs( props => ({
  className: 'register',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
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
  box-shadow: 0 0 8px rgba( 33, 33, 33, 0.17);
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
  }
`;

const Register = ( { values, touched, errors, status, setCurrentUser, user } ) => {

  return (
    <StyledPage className='register'>
      <StyledForm className='user-form'>
      <h1>New User:</h1>
      <Form>
        <StyledFields className='form-field-wrapper'>
        <Field
          type = 'text'
          name = 'name'
          placeholder = 'UserName' />
        { touched.name && errors.name && (
          <p className = 'error'>{ errors.name }</p>
        )}

        <Field
          type = 'text'
          name = 'email'
          placeholder = 'Email' />
        { touched.email && errors.email && (
          <p className = 'error'>{ errors.email }</p>
        )}

        <Field
          type = 'text'
          name = 'passwd'
          placeholder = 'Password' />
        { touched.passwd && errors.passwd && (
          <p className = 'error'>{ errors.passwd }</p>
        )}

        <label className="checkbox-container">
          {" "}
          Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos} />
          { touched.tos && errors.tos && (
            <p className = 'error'>{ errors.tos }</p>
          )}
          <span className="checkmark" />
        </label>

        <button type="submit">Submit</button>
        </StyledFields>
      </Form>
      </StyledForm>
    </StyledPage>
  );
};

const FormikRegister = withFormik( {
  mapPropsToValues( { name, email, passwd, tos } ) {
    return {
      name:     name || '',
      email:   email || '',
      passwd: passwd || '',
      tos:       tos || false
    };
  },
  validationSchema: Yup.object().shape({
    // TODO: validation
    name:   Yup.string ().required(),
    email:  Yup.string ().required(),
    passwd: Yup.string ().required(),
    tos:    Yup.boolean().oneOf( [true], 'Terms of Service Must be Accepted' )
  }),
  handleSubmit( values, { props, resetForm } ) {
    // TODO: still need to store user either to DB or ? json file perhaps without BE
    values.events = [];
    values.card   = {};
    values.notes  = '';
    values.id     = uuid.v4();

    values.defaultCollection = [];

    props.setCurrentUser( values );
    
    resetForm();

    props.history.push('/edit-card');
   }
} ) ( Register );

export default FormikRegister;
