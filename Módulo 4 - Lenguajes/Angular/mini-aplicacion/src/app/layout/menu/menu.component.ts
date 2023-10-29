import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnChanges {
  @Input()
  isLoggedIn: boolean = false;

  ngOnChanges() {
    this.isLoggedIn = this.isLoggedIn;
  }
}
