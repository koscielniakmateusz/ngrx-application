import { User } from 'src/app/model/user';
import { Constants } from 'src/app/constants';

export interface AuthState {
    isAuthenticated: boolean;
    authenticatedUser: User;
    errorMessage: string
}

export const initialAuthState: AuthState = {
    isAuthenticated: !!localStorage.getItem(Constants.TOKEN_NAME),
    authenticatedUser: null,
    errorMessage: null
}