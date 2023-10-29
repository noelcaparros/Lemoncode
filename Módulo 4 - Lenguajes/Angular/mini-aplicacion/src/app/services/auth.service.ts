import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: string, password: string): boolean {
    if (user === 'master@lemoncode.net' && password === '12345678') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  isLogged(): boolean {
    const username = localStorage.getItem('username');
    return username !== null;
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
