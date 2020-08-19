import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { isAuthenticated } from '../store/auth/auth.selector';
import { LogoutAction } from '../store/auth/auth.action';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticated);
  }

  logout(): void {
    this.store.dispatch(new LogoutAction());
  }

}
