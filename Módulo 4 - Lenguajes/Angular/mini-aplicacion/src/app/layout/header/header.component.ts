import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  constructor(private authService: AuthService, private router: Router) {}

  @Input()
  isLoggedIn: boolean = false;

  @Input()
  username: string | null = '';

  @Output()
  saveEvent: EventEmitter<{ isLoggedIn: boolean; username: string }> =
    new EventEmitter<{ isLoggedIn: boolean; username: string }>();

  ngOnChanges() {
    this.isLoggedIn = this.isLoggedIn;
    this.username = this.username;
  }

  logout() {
    this.authService.logout();
    this.saveEvent.emit({ isLoggedIn: false, username: '' });
    this.router.navigate(['/home']);
  }
}
