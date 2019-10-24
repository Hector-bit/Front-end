import axios from 'axios';
import FormikRegister from '../components/Register';

// const credentials = `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`

const axiosWithAuthTwo = () => {
    return axios.create({
        baseURL: 'https://card-organizer.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer `
        }
    })
}

export default axiosWithAuthTwo;