import { call, fork, takeEvery } from 'redux-saga/effects';
import { fetchInfoCharacter } from '../../services';
import { characterActions } from './actions';


export function* getDataHero({ payload }) {
    const { id } = payload;
    yield call(fetchInfoCharacter, id);
}

//Watchers
export function* watchDataHero() {
    yield takeEvery(characterActions.LOAD_HERO, getDataHero);
}

//Root
export const infoCharacterSaga = [
    fork(watchDataHero)
]