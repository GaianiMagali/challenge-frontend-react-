import { all } from 'redux-saga/effects';
// import { appearanceSaga } from './appearance/sagas';
import { infoCharacterSaga } from './character/sagas';
import { userLoggedSaga } from './login/sagas';
import { resultSearchSaga } from './search-character/sagas';

export default function* sagas() {
    yield all([
        // ...appearanceSaga,
        ...userLoggedSaga,
        ...infoCharacterSaga,
        ...resultSearchSaga
    ])
}