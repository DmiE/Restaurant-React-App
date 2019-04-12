import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://restaurant-react-app.firebaseio.com'
});

export default instance;