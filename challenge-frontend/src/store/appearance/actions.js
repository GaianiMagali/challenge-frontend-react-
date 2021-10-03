
export const appearanceActions = {
    APPEARANCE_SUCCESS: 'APPEARANCE_SUCCESS',
    APPEARANCE_PENDING: 'APPEARANCE_PENDING',
    APPEARANCE_FAILED: 'APPEARANCE_FAILED',
    LOAD_APPEARANCE:' LOAD_APPEARANCE',
   

    appearanceSuccess: data => ({
        type: appearanceActions.APPEARANCE_SUCCESS,
        payload: {
            data
        }
    }),

    appearancePending: () => ({
        type: appearanceActions.APPEARANCE_PENDING,
    }),

    appearanceFailed: error => ({
        type: appearanceActions.APPEARANCE_FAILED,
        payload: { error }
    }),

    loadAppearance: (id) => ({
        type: appearanceActions.LOAD_APPEARANCE,
        payload: { id }
    })
};

export const appearanceRequestActions = {
    failed: appearanceActions.appearanceFailed,
    success: appearanceActions.appearanceSuccess,
    pending: appearanceActions.appearancePending
}

