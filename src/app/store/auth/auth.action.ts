import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user';

export enum AuthActionType {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] LoginSuccess',
    LOGIN_FAILURE = '[Auth] LoginFailure',
    LOGOUT = '[Auth] Logout',
    LOGOUT_FINISH = '[Auth] LogoutFinish',
    CHECK_AUTHORIZATION = '[Auth] CheckAuthorization',
    GET_AUTHORIZED_USER = '[Auth] GetAuthorizedUser',
    GET_AUTHORIZED_USER_SUCCESS = '[Auth] GetAuthorizedUserSuccess',
    GET_AUTHORIZED_USER_FAILURE = '[Auth] GetAuthorizedUserFailure'
};

export class LoginAction implements Action {
    type: AuthActionType = AuthActionType.LOGIN;
    constructor(public payload: any) { }
};

export class LoginSuccessAction implements Action {
    type: AuthActionType = AuthActionType.LOGIN_SUCCESS;
    constructor(public payload: User) { }
};

export class LoginFailureAction implements Action {
    type: AuthActionType = AuthActionType.LOGIN_FAILURE;
    constructor(public payload: string) { }
};

export class LogoutAction implements Action {
    type: AuthActionType = AuthActionType.LOGOUT;
    constructor() { }
};

export class LogoutFinishAction implements Action {
    type: AuthActionType = AuthActionType.LOGOUT_FINISH;
    constructor() { }
};

export class GetAuthorizedUserAction implements Action {
    type: AuthActionType = AuthActionType.GET_AUTHORIZED_USER;
    constructor() { }
};

export class GetAuthorizedUserSuccessAction implements Action {
    type: AuthActionType = AuthActionType.GET_AUTHORIZED_USER_SUCCESS;
    constructor(public payload: User) { }
};

export class GetAuthorizedUserFailureAction implements Action {
    type: AuthActionType = AuthActionType.GET_AUTHORIZED_USER_FAILURE;
    constructor(public payload: string) { }
};

export type AuthAction = 
      LoginAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutAction
    | LogoutFinishAction
    | GetAuthorizedUserAction
    | GetAuthorizedUserSuccessAction
    | GetAuthorizedUserFailureAction;