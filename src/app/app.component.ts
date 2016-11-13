import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'app works!';
  constructor(private authService: AuthService) { }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
    // this.isAuthenticated = false;
  }
}
