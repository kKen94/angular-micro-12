import { Component } from '@angular/core';
import { Users } from '@models';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: Users;

  constructor() {
    this.user = { username: 'Franco' };
  }
}
