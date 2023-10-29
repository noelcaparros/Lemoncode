import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string;
  password: string;
  loginIncorrect: boolean;

  @Output()
  saveEvent: EventEmitter<{ isLoggedIn: boolean; username: string }> =
    new EventEmitter<{ isLoggedIn: boolean; username: string }>();

  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
    this.loginIncorrect = false;
  }

  check(): boolean {
    if (this.username === '' || this.password === '') {
      return true;
    }
    return false;
  }

  login() {
    this.loginIncorrect = !this.authService.login(this.username, this.password);
    if (this.authService.login(this.username, this.password)) {
      this.saveEvent.emit({ isLoggedIn: true, username: this.username });
      this.router.navigate(['/dashboard']);
    }
  }
}
