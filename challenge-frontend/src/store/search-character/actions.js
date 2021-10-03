

export const searchCharacterActions = {
    SEARCH_CHARACTER_SUCCESS: 'SEARCH_CHARACTER_SUCCESS',
    SEARCH_CHARACTER_PENDING: 'SEARCH_CHARACTER_PENDING',
    SEARCH_CHARACTER_FAILED: 'SEARCH_CHARACTER_FAILED',
    SEARCH_LOAD_CHARACTER: 'SEARCH_LOAD_CHARACTER',
    SEARCH_RESET_CHARACTER: ' SEARCH_RESET_CHARACTER',
   

    searchCharacterSuccess: data => ({
        type: searchCharacterActions.SEARCH_CHARACTER_SUCCESS,
        payload: {
            data
        }
    }),

    searchCharacterPending: () => ({
        type: searchCharacterActions.SEARCH_CHARACTER_PENDING,
    }),

    searchCharacterFailed: error => ({
        type: searchCharacterActions.SEARCH_CHARACTER_FAILED,
        payload: { error }
    }),

    loadSearchCaracter: (name) => ({
        type: searchCharacterActions.SEARCH_LOAD_CHARACTER,
        payload: { name }
    }),

    resetSearchCaracter : () => ({
        type: searchCharacterActions.SEARCH_RESET_CHARACTER,
    })
};

export const searchCharacterRequestActions = {
    failed: searchCharacterActions.searchCharacterFailed,
    success: searchCharacterActions.searchCharacterSuccess,
    pending: searchCharacterActions.searchCharacterPending
}