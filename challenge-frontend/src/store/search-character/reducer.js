import { searchCharacterActions } from "./actions";
import { search_result_initial_state } from "./searchResult";

export const searchCharacterReducer = (state = search_result_initial_state, { payload, type }) => {

    switch (type) {
        case searchCharacterActions.SEARCH_CHARACTER_SUCCESS:
            return {
                ...state,
                isPending: false,
                success: true,
                error: null,
                data: payload.data,
            }

        case searchCharacterActions.SEARCH_CHARACTER_PENDING: 
            return {
                ...state,
                isPending: true
            }

        case searchCharacterActions.SEARCH_CHARACTER_FAILED:
            return {
                ...state,
                isPending: false,
                success: false,
                error: payload.error,
            }
        case searchCharacterActions.SEARCH_RESET_CHARACTER:
            return search_result_initial_state

        default:
            return state;
    }
}