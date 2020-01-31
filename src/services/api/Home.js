import axios from 'axios';

export const getNote = () => {
    return axios.get('/note')
};

export const createNote = ({title, time, id}) => {
    return axios.post('/note', {
        title,
        content: null,
        time,
        tags: [],
        files: false,
        text: '',
        id
    })
};

export const getCreateCard = id => {
    return axios.get(`/note/${id}`)
}

export const fixNote = ({id, note}) => {
    if(id === undefined) return
    return axios.put(`/note/${id}`, note)
}