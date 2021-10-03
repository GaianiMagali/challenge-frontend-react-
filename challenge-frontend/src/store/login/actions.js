
export const userLoggedActions = {
    USER_LOGGED_SUCCESS: 'USER_LOGGED_SUCCESS',
    USER_LOGGED_PENDING: 'USER_LOGGED_PENDING',
    USER_LOGGED_FAILED: 'USER_LOGGED_FAILED',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SET_USER_LOGGED: 'SET_USER_LOGGED',

    userLoggedSuccess: data => ({
        type: userLoggedActions.USER_LOGGED_SUCCESS,
        payload: {
            data
        }
    }),

    userLoggedPending: () => ({
        type: userLoggedActions.USER_LOGGED_PENDING
    }),

    userLoggedFailed: error => ({
        type: userLoggedActions.USER_LOGGED_FAILED,
        payload: { error }
    }),

    login: ( email, password ) => ({
        type: userLoggedActions.LOGIN,
        payload: {
            email,
            password
        }
    }),

    logout: () => ({
        type: userLoggedActions.LOGOUT,
    }),
    
    setUserLogged: (data) => ({
        type: userLoggedActions.SET_USER_LOGGED,
        payload: {
            data
        }
    })
};

export const userLoggedRequestActions = {
    failed: userLoggedActions.userLoggedFailed,
    success: userLoggedActions.userLoggedSuccess,
    pending: userLoggedActions.userLoggedPending
}