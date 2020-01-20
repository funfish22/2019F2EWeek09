import axios from 'axios';

export const getNote = () => {
    return axios.get('/note')
};