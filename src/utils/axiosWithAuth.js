import axios from 'axios';

// //this axios with auth is what is used to retrieve a token from the server.js
// export const axiosWithAuth = () => {
//   // return an instance of axios
//   return axios.create({
//     // baseURL: 'http://localhost:5000',
//     headers: {
//       Authorization: localStorage.getItem('token')    
//     }
//   });

// };


const axiosWithAuth = () => {

// axiosWithAuth = ()

return axios.create({
  baseURL: 'https://card-organizer.herokuapp.com',
  headers: {
      // btoa is converting our client id/client secret into base64
      Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
  }
});
}

export default axiosWithAuth