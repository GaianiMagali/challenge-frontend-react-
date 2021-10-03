import { call, put } from 'redux-saga/effects';
// import { appearanceRequestActions } from '../store/appearance/actions';
import { characterRequestActions } from '../store/character/actions';
import { userLoggedRequestActions } from '../store/login/actions';
import { searchCharacterRequestActions } from '../store/search-character/actions';
import { api } from './api-service';

function* fetchEntities(apiFunction, actions, id, param) {
    try {
        yield put(actions.pending());

        const data = yield call(apiFunction, param || id);

        if ( !data.response || (data && data.response==="success")) {
            yield put(actions.success(data));
        } else {
            console.log('hola');
            yield put(actions.failed(data));
        }

    } catch (error) {
        yield put(actions.failed(error));
    }
}

export const fetchLogin = fetchEntities.bind(null, api.fetchLogin, userLoggedRequestActions);
export const fetchInfoCharacter = fetchEntities.bind(null, api.fetchInfoCharacter, characterRequestActions);
export const fetchSearchCharacter = fetchEntities.bind(null, api.fetchSearchCharacter, searchCharacterRequestActions);




export const fetchPowerstatsCharacter = fetchEntities.bind(null, api.fetchPowerstatsCharacter);
export const fetchBiographyCharacter = fetchEntities.bind(null, api.fetchBiographyCharacter);
// export const fetchAppearanceCharacter = fetchEntities.bind(null, api.fetchAppearanceCharacter, appearanceRequestActions);
export const fetchWorkCharacter = fetchEntities.bind(null, api.fetchWorkCharacter);
export const fetchConnectionsCharacter = fetchEntities.bind(null, api.fetchConnectionsCharacter);
export const fetchImageCharacter = fetchEntities.bind(null, api.fetchImageCharacter);

