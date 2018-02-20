import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }
}
