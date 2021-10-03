import { call, fork, takeEvery } from 'redux-saga/effects';
// import { fetchAppearanceCharacter } from '../../services/sagas';
// import { appearanceActions } from './actions';


// export function* getAppearance({ payload }) {
//     const { id } = payload;
//     // yield call(fetchAppearanceCharacter, id);
// }

// //Watchers
// export function* watchGetAppearance() {
//     yield takeEvery(appearanceActions.LOAD_APPEARANCE, getAppearance);
// }


// //Root
// export const appearanceSaga = [
//     fork(watchGetAppearance)
// ]