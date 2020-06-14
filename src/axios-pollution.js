import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://airapi.airly.eu/v2/measurements/'
});

export default instance;
