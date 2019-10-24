import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

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
    font-size: 1.6rem;
  }
`;


const CreateCard = ( { values, touched, errors, status, setCurrentUser, user } ) => {

  return (
    <StyledPage className='create'>
      <Header user={ user } />
      <StyledForm className='user-form'>
      <h1>Card Details:</h1>
      <Form>
        <StyledFields className='form-field-wrapper'>
          <Field
            type = 'text'
            name = 'company'
            placeholder = 'Company' />
          { touched.company && errors.company && (
            <p className = 'error'>{ errors.company }</p>
          )}
          <Field
            type = 'text'
            name = 'name'
            placeholder = 'Name' />
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
            name = 'phone'
            placeholder = '(123) 123-1234' />
          { touched.phone && errors.phone && (
            <p className = 'error'>{ errors.phone }</p>
          )}

          <Field
            type = 'text'
            name = 'website'
            placeholder = 'Website' />
          { touched.website && errors.website && (
            <p className = 'error'>{ errors.website }</p>
          )}

          <button type="submit">Submit</button>
        </StyledFields>
      </Form>
      </StyledForm>
    </StyledPage>
  );
};

const FormikCreateCard = withFormik( {

  enableReinitialize: true,
  mapPropsToValues( { user } ) {
    return {
      company: user.card.company || '',
      name:    user.card.name    || user.name  || '',
      email:   user.card.email   || user.email || '',
      phone:   user.card.phone   || '',
      website: user.card.website || '',
    };
  },
  validationSchema: Yup.object().shape({
    // TODO: validatioin
    company: Yup.string ().required(),
    name:    Yup.string ().required(),
    email:   Yup.string ().required(),
    phone:   Yup.string ().matches(
      /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
      'Phone number is not valid'), //https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204/5
    website: Yup.string ().required(),
  }),
  handleSubmit( values, { props, resetForm } ) {

    axiosWithAuth()
    .get('/users')
    .then(res => {
      console.log('createcard', res)
    })

    const updatedUser = { ...props.user };
    updatedUser.card  = { ...values     };
    
    updatedUser.card.notes = '';

    // TODO: get url from backend and store in:
    updatedUser.card.codeUrl = 'testing';

    props.setCurrentUser( updatedUser );

    resetForm();

    props.history.push('/card');
   }
} ) ( CreateCard );

export default FormikCreateCard;
