import { call, fork, takeEvery} from 'redux-saga/effects';
import { fetchSearchCharacter } from '../../services';
import { searchCharacterActions } from './actions';


export function* resultSearch({ payload }) {
    const { name } = payload;
    yield call(fetchSearchCharacter, name);
}


//Watchers
export function* watchResultSearch() {
    yield takeEvery(searchCharacterActions.SEARCH_LOAD_CHARACTER, resultSearch);
}


//Root
export const resultSearchSaga = [
    fork(watchResultSearch)
]