export const AUTHENTICATE_USER='AUTHENTICATE_USER'
export const SIGN_OUT='SIGN_OUT'

export function authenticateUser(id = null){
    return{
        type:AUTHENTICATE_USER,
        id
    }
}

export function handleLogin (id) {
    return (dispatch) => {
        return dispatch(authenticateUser(id));
    }
}

export function signOut() {
    return{
        type:SIGN_OUT,
        id: null
    }
}

export function handleSignOut () {
    return (disptach) => {
        return disptach(signOut());
    }
}