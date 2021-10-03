

export const heroActions = {
    HERO_SUCCESS: 'HERO_SUCCESS',
    HERO_PENDING: 'HERO_PENDING',
    HERO_FAILED: 'HERO_FAILED',
    LOAD_HERO: 'LOAD_HERO',
    RESET_HERO: 'RESET_HERO',


    heroSuccess: data => ({
        type: heroActions.HERO_SUCCESS,
        payload: {
            data
        }
    }),

    heroPending: () => ({
        type: heroActions.HERO_PENDING,
    }),

    heroFailed: error => ({
        type: heroActions.HERO_FAILED,
        payload: { error }
    }),

    loadHero: (id) => ({
        type: heroActions.LOAD_HERO,
        payload: { id }
    }),

    resetHero: () => ({
        type: heroActions.RESET_HERO
    })
};

export const heroRequestActions = {
    failed: heroActions.heroFailed,
    success: heroActions.heroSuccess,
    pending: heroActions.heroPending
}

