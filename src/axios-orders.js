import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c4f7a.firebaseio.com/'
});

export default instance;