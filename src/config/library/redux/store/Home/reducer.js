import { Types } from './action'

const initState = {
    searchStar: false
}


const Home = (state = initState, action) => {
    switch(action.type){
        case Types.GET_NOTE_SUCCESS :
            return {
                ...state,
                note: action.payload.notes
            }

        case Types.CREATE_NOTE_REQUEST:
            return {
                ...state,
                note: [...state.note, {
                    title: action.payload.title,
                    content: '',
                    time: action.payload.time,
                    tags: [],
                    files: false,
                    id: action.payload.id
                }]
            }

        default:
            return state;
    }
}

export default Home;