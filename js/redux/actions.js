export function user_SignUp(userData) {
    return {
        type: 'USER_SIGNUP',
        userData: userData
    }
}

export function user_Login(userData) {
    return {
        type: 'USER_LOGIN',
        userData: userData
    }
}