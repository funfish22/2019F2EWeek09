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

        default:
            return state;
    }
}

export default Home;