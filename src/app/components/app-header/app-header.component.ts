import { Component } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor(private authService: AuthenticationService) { }

  onLogout() {
    this.authService.logout();
  }
}
