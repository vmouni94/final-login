import { Component, ViewChild ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthService} from '../../auth.service';
import {AuthGuard} from '../../auth-guard.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import {AuthenticationService} from "../../services/authentication.service";
import {AlertService} from "../../services/alert.service";
import {UserService} from "../../services/user.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;


  constructor(private router: Router,
              private user: UserService,
              private authService: AuthenticationService,
              private alertService: AlertService) { }


  ngOnInit() {

  }


  login() {

    this.authService.login(this.username, this.password)
      .subscribe(result => {
          if (result != null){
            // console.log(result);
            // console.log(this.user.getUserLogService());
            this.user.setUserLogService();
            localStorage.setItem('currentUser', JSON.stringify(result));
            // console.log(this.user.getUserLogService());
            this.router.navigate(['dashboard']);
          }
          else{
            this.alertService.error('Username or password is incorrect');
          }
        },
        error => {
          console.log(error._body);
          console.log('login failed');

        });
  }


}
