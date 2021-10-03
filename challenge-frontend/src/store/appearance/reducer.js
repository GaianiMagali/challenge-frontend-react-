import { appearanceActions } from "./actions";
import { appearance_initial_state} from "./appearance";

export const appearanceReducer = (state = appearance_initial_state, { payload, type }) => {
    switch (type) {
        case appearanceActions.APPEARANCE_SUCCESS:
            return {
                ...state,
                isPending: false,
                success: true,
                error: null,
                user: payload.data
            }

        case appearanceActions.USER_LOGGED_PENDING:
            return {
                ...state,
                isPending: true
            }

        case appearanceActions.APPEARANCE_FAILED:
            return {
                ...state,
                isPending: false,
                success: false,
                error: payload.error,
            }
        default:
            return state;
    }
}