import { AppState } from '../app.state';

export const isAuthenticated = (state: AppState) => state.auth.isAuthenticated;
export const authenticatedUser = (state: AppState) => state.auth.authenticatedUser;
export const errorMessage = (state: AppState) => state.auth.errorMessage;