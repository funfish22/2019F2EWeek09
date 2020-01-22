import axios from 'axios';

export const getNote = () => {
    return axios.get('/note')
};

export const createNote = ({title, time, id}) => {
    return axios.post('/note', {
        title,
        content: '',
        time,
        tags: [],
        files: false,
        id
    })
};

export const getCreateCard = id => {
    return axios.get(`/note/${id}`)
}