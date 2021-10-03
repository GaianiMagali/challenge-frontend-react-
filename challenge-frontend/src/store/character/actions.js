

export const characterActions = {
    CHARACTER_SUCCESS: 'CHARACTER_SUCCESS',
    CHARACTER_PENDING: 'CHARACTER_PENDING',
    CHARACTER_FAILED: 'CHARACTER_FAILED',
    LOAD_CHARACTER: 'LOAD_CHARACTER',
    RESET_CHARACTER: 'RESET_CHARACTER',
    DELETE_CHARACTER: 'DELETE_CHARACTER',
    ADD_CHARACTER: 'ADD_CHARACTER',


    characterSuccess: data => ({
        type: characterActions.CHARACTER_SUCCESS,
        payload: {
            data
        }
    }),

    characterPending: () => ({
        type: characterActions.CHARACTER_PENDING,
    }),

    characterFailed: error => ({
        type: characterActions.CHARACTER_FAILED,
        payload: { error }
    }),

    loadCharacter: (id) => ({
        type: characterActions.LOAD_CHARACTER,
        payload: { id }
    }),

    resetCharacter: () => ({
        type: characterActions.RESET_CHARACTER
    }),

    deleteCharacter: (id) => ({
        type: characterActions.DELETE_CHARACTER,
        payload: { id }
    }),

    addCharacter: (hero) => ({
        type: characterActions.ADD_CHARACTER,
        payload: { hero }
    })
};

export const characterRequestActions = {
    failed: characterActions.characterFailed,
    success: characterActions.characterSuccess,
    pending: characterActions.characterPending
}

