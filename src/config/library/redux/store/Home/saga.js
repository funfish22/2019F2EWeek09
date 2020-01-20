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

const HomeSagas = [
    fork(watchGetNoteRequest)
];

export default HomeSagas;