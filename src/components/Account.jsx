// Account details: username, email, card details

import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const StyledPage = styled.div.attrs( props => ({
  className: 'account',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #191A2A;
  background-color: #E7E3D6;
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
  box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);
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

const Account = ( { values, touched, errors, status, setCurrentUser, user } ) => {

  return (
    <StyledPage className='account'>
      <StyledForm className='user-form'>
        <h1>Account Details</h1>
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
            name = 'passwd1'
            placeholder = 'Password' />
          { touched.passwd1 && errors.passwd1 && (
            <p className = 'error'>{ errors.passwd1 }</p>
          )}

          <Field
            type = 'text'
            name = 'passwd2'
            placeholder = 'Password' />
          { touched.passwd2 && errors.passwd2 && (
            <p className = 'error'>{ errors.passwd2 }</p>
          )}

          <button type="submit">Submit</button>
          </StyledFields>
        </Form>
      </StyledForm>
    </StyledPage>
  );
};

const FormikAccount = withFormik( {
  mapPropsToValues( { name, email, passwd, tos, user } ) {
    return {
      name:     user.name || '',
      email:   user.email || '',
      passwd1: '',
      passwd2: ''
    };
  },
  validationSchema: Yup.object().shape({
    // TODO: validation
    name:    Yup.string().required(),
    email:   Yup.string().required(),
    passwd1: Yup.string(),
    passwd2: Yup.string()
  }),
  handleSubmit( values, { props, resetForm } ) {

    props.setCurrentUser( { ...props.user, ...values } );
    
    resetForm();

    props.history.push('/card');
   }
} ) ( Account );

export default FormikAccount;
