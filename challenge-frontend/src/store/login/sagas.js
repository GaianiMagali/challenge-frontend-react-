import { call, fork, takeEvery, take } from 'redux-saga/effects';
import { fetchLogin } from '../../services';
import { setItem } from '../../utils/localStorage';
import { userLoggedActions } from './actions';

export function* signin({ payload }) {
    const { email, password } = payload;
    yield call(fetchLogin, { email, password });
}

//Watchers
export function* watchSignin() {
    yield takeEvery(userLoggedActions.LOGIN, signin);
}

export function* watchLoginUserSuccess() {
    while (true) {
        const { payload } = yield take(userLoggedActions.USER_LOGGED_SUCCESS);
        setItem("userLogged",payload.data);
    }
}

//Root
export const userLoggedSaga = [
    fork(watchSignin),
    fork(watchLoginUserSuccess)
]