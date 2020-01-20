export const Types = {
    GET_NOTE_REQUEST: 'home/get_note_request',
    GET_NOTE_SUCCESS: 'home/get_note_success'
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