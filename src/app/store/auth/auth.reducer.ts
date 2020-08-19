import { initialAuthState, AuthState } from './auth.state';
import { AuthActionType } from './auth.action';

export const authReducer = (state = initialAuthState, action): AuthState => {
    switch (action.type) {
        case AuthActionType.LOGIN_SUCCESS: {
            return { 
                ... state, 
                isAuthenticated: true, 
                authenticatedUser: action.payload,
                errorMessage: null
            };
        }
        case AuthActionType.LOGIN_FAILURE: {
            return { 
                ... state, 
                errorMessage: action.payload 
            };
        }
        case AuthActionType.LOGOUT_FINISH: {
            return { 
                ... state, 
                authenticatedUser: null,
                isAuthenticated: false
            }
        }
        case AuthActionType.GET_AUTHORIZED_USER_SUCCESS: {
            return { 
                ... state, 
                authenticatedUser: action.payload,
                errorMessage: null
            };
        }
        case AuthActionType.GET_AUTHORIZED_USER_FAILURE: {
            return { 
                ... state,
                errorMessage: action.payload
            };
        }
        default: {
            return { ... state };
        }
    }
}