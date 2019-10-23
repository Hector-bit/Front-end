import React from 'react';
import { NavLink } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const StyledPage = styled.div.attrs( props => ({
  className: 'login',
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
    font-size: 1.6rem;
  }
`;

const StyledLinks = styled.div.attrs( props => ({
  className: 'links',
}))`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
`;

const Login = ( { values, touched, errors, status, setCurrentUser, user } ) => {

  return (
    <StyledPage className='login'>
      <StyledForm className='user-form'>
        <h1>Login:</h1>
        <Form>
          <StyledFields className='form-field-wrapper'>
          <Field
            type = 'text'
            name = 'name'
            placeholder = 'Name' />
          { touched.name && errors.name && (
            <p className = 'error'>{ errors.name }</p>
          )}

          <Field
            type = 'text'
            name = 'passwd'
            placeholder = 'Password' />
          { touched.passwd && errors.passwd && (
            <p className = 'error'>{ errors.passwd }</p>
          )}

          <button type="submit">Submit</button>
          </StyledFields>
        </Form>
        <StyledLinks className='links'>
          <NavLink to={ '/register'   } activeClassName='link-active'>Register</NavLink>
          <NavLink to={ '/pass-reset' } activeClassName='link-active'>Forgot Password</NavLink>
        </StyledLinks>
      </StyledForm>
    </StyledPage>
  );
};

const FormikLogin = withFormik( {
  mapPropsToValues( { name, email, passwd, tos } ) {
    return {
      name:     name || '',
      passwd: passwd || ''
    };
  },
  validationSchema: Yup.object().shape({
    name:   Yup.string ().required(),
    passwd: Yup.string ().required()
  }),
  handleSubmit( values, { props, resetForm } ) {
    // TODO: still need to authenticate user
    props.setCurrentUser( values );

    resetForm();

    props.history.push('/card');
   }
} ) ( Login );

export default FormikLogin;