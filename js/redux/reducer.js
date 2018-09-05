import { combineReducers } from 'redux';

function userAuth(state = {}, action) {
    switch (action.type) {
        case 'USER_SIGNUP':
            return { ...state, ['userData']: [action.userData] }
        case 'USER_LOGIN':
            return { ...state, ['userData']: [action.userData] }
        default: return state
    }
}

const rootReducer = combineReducers({
    userAuth
});

export default rootReducer;