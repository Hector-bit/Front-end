import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import uuid from 'uuid';
import axiosWithAuthTwo from '../utils/axiosWithAuthTwo';
import axiosWithAuth from '../utils/axiosWithAuth';


const StyledPage = styled.div.attrs( props => ({
  className: 'register',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  color: #191A2A;
  background-color: #E7E3D6;
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

// class Register extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     // login to retrieve the JWT token
//     // add the token to localstorage
//     console.log(this.state.credentials);

//     const credentials = `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`

//     axiosWithAuth()
//     .post('/login', credentials)
//     .then(res => {
//       console.log(res)
//       // localStorage.setItem('token', res);
//       this.props.history.push('/edit-card');
//     })
//     .catch(err => console.log(err.response));
//     };

//   render() {
//     // if (localStorage.getItem('token')) {
//     //   return <Redirect to="/login" />;
//     // }
//     return (
//       <StyledPage className='login'>
//         <StyledForm className='user-form'>
//         <h1>Register:</h1>
//         <Form onSubmit={this.login}>
//           <StyledFields className='form-field-wrapper'>
//           <input
//             type="text"
//             name="username"
//             placeholder="username"
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           </StyledFields>
//           {/* <StyledFields>
//             <input
//             type="text"
//             name="email"
//             placeholder="email"
//             value={this.state.credentials.email}
//             onChange={this.state.handleChange}
//             />
//           </StyledFields> */}
//           <StyledFields>
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
          
//           <button type="submit">Log in</button>
//           </StyledFields>
//         </Form>
//         {/* <StyledLinks className='links'>
//            <NavLink to={ '/register'   } activeClassName='link-active'>Register</NavLink>
//            <NavLink to={ '/pass-reset' } activeClassName='link-active'>Forgot Password</NavLink>
//          </StyledLinks> */}
//          </StyledForm>
//       </StyledPage>
//     );
//   }
// }

// export default Register;

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
    console.log(props, values)

    const credentials = `grant_type=password&username=${values.name}&password=${values.password}`

    axiosWithAuthTwo()
    .post('/users', credentials)
    .then(res => {
      console.log(credentials)
      console.log(res)
    })
    .catch(err => console.log(err))

    values.events = [];
    values.card   = {};
    values.id     = uuid.v4();

    values.card.notes  = '';

    values.defaultCollection = [];

    props.setCurrentUser( values );
    
    resetForm();

    props.history.push('/');
   }
} ) ( Register );

export default FormikRegister;
