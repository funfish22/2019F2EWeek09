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
        yield getCreateCard(action.payload.id)
    }catch (e) {
        
    }
}

function* getCreateCard(action, payload) {
    try{
        const result = yield call(api.getCreateCard, (action))
        yield put(actions.getTargetCardSuccess({
            note: result.data
        }))
    }catch (e) {

    }
}

function* watchCreateNoteSuccess() {
    yield takeLatest(actions.Types.CREATE_NOTE_SUCCESS, createNote)
}

function* postNote(action, payload) {
    try{
        yield call(api.fixNote, {id: action.payload.beforeCard.id, note: action.payload.beforeCard})
    }catch (e) {

    }
}

function* watchPostNote() {
    yield takeLatest(actions.Types.GET_TARGET_CARD, postNote)
}

const HomeSagas = [
    fork(watchGetNoteRequest),
    fork(watchCreateNoteSuccess),
    fork(watchPostNote)
];

export default HomeSagas;