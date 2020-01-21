import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from './action';
import * as api from 'services/api/Home';

function* getNote() {
    try{
        const result = yield call(api.getNote);
        yield put(actions.getNoteSuccess({
            notes: result.data
        }))
    }catch (e) {
        
    }
}

function* watchGetNoteRequest() {
    yield takeEvery(actions.Types.GET_NOTE_REQUEST, getNote)
}

function* createNote(action, payload) {
    try{
        yield call(api.createNote, {title: action.payload.title, time: action.payload.time, id: action.payload.id});
    }catch (e) {
        
    }
}

function* watchCreateNoteSuccess() {
    yield takeLatest(actions.Types.CREATE_NOTE_SUCCESS, createNote)
}

const HomeSagas = [
    fork(watchGetNoteRequest),
    fork(watchCreateNoteSuccess)
];

export default HomeSagas;