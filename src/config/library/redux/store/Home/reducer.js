import { Types } from './action'

const initState = {
    searchStar: false,
    targetCard: {
        title: ''
    },
    targetCardId: ''
}


const Home = (state = initState, action) => {
    switch(action.type){
        case Types.GET_NOTE_SUCCESS :
            return {
                ...state,
                note: action.payload.notes
            }

        case Types.CREATE_NOTE_REQUEST :
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

        case Types.GET_TARGET_CARD :
            const targetCard = state.note.find((row) => row.id === action.payload.id)

            return {
                ...state,
                targetCardId: action.payload.id,
                targetCard: targetCard
            }

        case Types.GET_TARGET_CARD_SUCCESS :
            return {
                ...state,
                targetCard: action.payload.note,
            }

        case Types.CREATE_NOTE_INFO :
            const targetCardInfo = {
                ...state.targetCard,
                title: action.payload.title
            }

            const targetCardArray = state.note.map((row) => {
                if(row.id === action.payload.id) {
                    return {
                        ...row,
                        title: action.payload.title
                    }
                } else {
                    return row
                }
            })
            
            return {
                ...state,
                targetCard: targetCardInfo,
                note: targetCardArray
            }

        default:
            return state;
    }
}

export default Home;