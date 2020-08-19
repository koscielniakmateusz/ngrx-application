import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { AuthActionType, LoginAction, LoginSuccessAction, LogoutFinishAction, GetAuthorizedUserSuccessAction, LoginFailureAction, GetAuthorizedUserFailureAction, AuthAction } from './auth.action';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable()
export class AuthEffect {

    constructor(
        private actions$: Actions, 
        private auth: AuthService,
        private router: Router
    ) { }

    @Effect()
    login: Observable<any> = this.actions$
        .pipe(
            ofType<AuthAction>(AuthActionType.LOGIN),
            map((action: LoginAction) => action.payload),
            mergeMap((payload: any) => {
                return this.auth.login(payload)
                    .pipe(
                        tap((response: any) => {
                            this.auth.setToken(response.Token);
                            this.router.navigate(['home']);
                        }),
                        mergeMap(() => this.auth.getLoggedUser()),
                        map((user: User) => new LoginSuccessAction(user)),
                        catchError((response: any) => of(new LoginFailureAction(response.error.message)))
                    )
            }),
        );

    @Effect()
    logout: Observable<any> = this.actions$
        .pipe(
            ofType<AuthAction>(AuthActionType.LOGOUT),
            map(() => {
                this.auth.removeToken();
                this.router.navigate(['login']);
                return new LogoutFinishAction();
            })
        );

    @Effect()
    getAuthorizedUser: Observable<any> = this.actions$
        .pipe(
            ofType<AuthAction>(AuthActionType.GET_AUTHORIZED_USER),
            mergeMap(() => this.auth.getLoggedUser()
                .pipe(
                    map((user: User) => new GetAuthorizedUserSuccessAction(user)),
                    catchError((response: any) => of(new GetAuthorizedUserFailureAction(response.error.message)))
                )
            ),
        );

}