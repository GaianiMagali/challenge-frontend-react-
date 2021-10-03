import { heroActions } from "./actions";
import { hero_initial_state  } from "./hero";

export const characterReducer = (state = hero_initial_state , { payload, type }) => {

    switch (type) {
        case heroActions.HERO_SUCCESS:
            return {
                ...state,
                isPending: false,
                success: true,
                error: null,
                data: payload.data,
            }

        case heroActions.HERO_PENDING:
            return {
                ...state,
                isPending: true
            }

        case heroActions.HERO_FAILED:
            return {
                ...state,
                isPending: false,
                success: false,
                error: payload.error,
            }
        case heroActions.RESET_HERO:
            return hero_initial_state
            
        default:
            return state;
    }
}