export const Types = {
    GET_NOTE_REQUEST: 'home/get_note_request',
    GET_NOTE_SUCCESS: 'home/get_note_success',

    CREATE_NOTE_REQUEST: 'home/create_note_request',
    CREATE_NOTE_SUCCESS: 'home/create_note_success',

    GET_TARGET_CARD: 'home/get_target_card',
    GET_TARGET_CARD_SUCCESS: 'home/get_target_card_success',

    CREATE_NOTE_INFO: 'home/create_note_info'
}

export const getNoteRequest = () => ({
    type: Types.GET_NOTE_REQUEST
})

export const getNoteSuccess = ({notes}) => ({
    type: Types.GET_NOTE_SUCCESS,
    payload: {
        notes
    }
})

export const createNoteRequest = ({title, time, id}) => {
    return{
        type: Types.CREATE_NOTE_REQUEST,
        payload: {
            title,
            time,
            id
        }
    }
}

export const createNoteSuccess = ({title, time, id}) => {
    return{
        type: Types.CREATE_NOTE_SUCCESS,
        payload: {
            title,
            time,
            id
        }
    }
}

export const getTargetCard = id => ({
    type: Types.GET_TARGET_CARD,
    payload: {
        id
    }
})

export const getTargetCardSuccess = ({note}) => ({
    type: Types.GET_TARGET_CARD_SUCCESS,
    payload: {
        note
    }
})

export const createNoteInfo = (id, title) => ({
    type: Types.CREATE_NOTE_INFO,
    payload: {
        id,
        title
    }
})