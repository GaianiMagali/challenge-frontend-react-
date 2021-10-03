import { call, fork, takeEvery} from 'redux-saga/effects';
import { fetchInfoCharacter } from '../../services';
import { characterActions } from './actions';


export function* getInfoCharacter({ payload }) {
    const { id } = payload;
    yield call(fetchInfoCharacter, id);
}


//Watchers
export function* watchInfoCharacter() {
    yield takeEvery(characterActions.LOAD_CHARACTER, getInfoCharacter);
}


//Root
export const infoCharacterSaga = [
    fork(watchInfoCharacter)
]