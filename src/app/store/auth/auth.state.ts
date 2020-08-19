import { User } from 'src/app/model/user';

export interface AuthState {
    isAuthenticated: boolean;
    authenticatedUser: User;
    errorMessage: string
}

export const initialAuthState: AuthState = {
    isAuthenticated: !!localStorage.getItem('Authorization'),
    authenticatedUser: null,
    errorMessage: null
}