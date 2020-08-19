import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { authenticatedUser } from './../store/auth/auth.selector';
import { GetAuthorizedUserAction } from '../store/auth/auth.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticatedUser$: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetAuthorizedUserAction());
    this.authenticatedUser$ = this.store.select(authenticatedUser);
  }

}
