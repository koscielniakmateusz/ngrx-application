import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

import { LoginAction } from './../store/auth/auth.action';
import { Observable } from 'rxjs';
import { errorMessage } from '../store/auth/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage$: Observable<string>;

  constructor(
    private store: Store<AppState>, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.errorMessage$ = this.store.select(errorMessage);
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    const email = this.loginForm.get('email');
    const password = this.loginForm.get('password');
    if (email.valid && password.valid) {
      const credentials = { email: email.value, password: password.value };
      this.store.dispatch(new LoginAction(credentials));
    }
  }

}
