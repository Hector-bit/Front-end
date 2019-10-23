import axios from 'axios';

//this axios with auth is what is used to retrieve a token from the server.js
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: token    
    }
  });
};
