import { getItem } from "../../utils/localStorage";
import { characterActions } from "./actions";
import { character_initial_state } from "./character";

export const characterReducer = (state = character_initial_state, { payload, type }) => {

    switch (type) {
        case characterActions.CHARACTER_SUCCESS:
            return {
                ...state,
                isPending: false,
                success: true,
                error: null,
                character: payload.data,
                team: state.team && state.team.id !== payload.data.id ? state.team.concat(payload.data) : payload.data.team,

            }

        case characterActions.CHARACTER_PENDING:
            return {
                ...state,
                isPending: true
            }

        case characterActions.CHARACTER_FAILED:
            return {
                ...state,
                isPending: false,
                success: false,
                error: payload.error,
            }
        case characterActions.RESET_CHARACTER:
            return character_initial_state

        case characterActions.DELETE_CHARACTER:
            return {
                ...state,
                team: state.team.filter(element => Number(element.id) !== Number(payload.id))
            }

        case characterActions.ADD_CHARACTER:
            return {
                ...state,
                team: [...state.team, payload.hero]
            }
        default:
            return state;
    }
}