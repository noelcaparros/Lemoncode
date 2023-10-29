import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mini-aplicacion';

  isLoggedIn: boolean = false;
  username: string | null = '';

  save(object: any) {
    this.isLoggedIn = object.isLoggedIn;
    this.username = object.username;
  }

  isLoginInUrl() {
    return window.location.href.includes('login');
  }

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLogged();
    this.username = this.authService.getUsername();
  }
}
