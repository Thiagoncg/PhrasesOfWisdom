import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/phrases/random',
});

export default api;