import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.mapquestapi.com/geocoding/v1/'
});

export default instance;
