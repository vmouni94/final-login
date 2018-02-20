import { Component, ViewChild ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthService} from '../../auth.service';
import {AuthGuard} from '../../auth-guard.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare let jquery: any;
declare let $: any;

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit{
  user: any = [];
  form: any = {};
  @ViewChild('f') loginForm: NgForm;


  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    // console.log(this.cookieService.getAll());
    this.form.username = this.cookieService.get('username');
    this.form.password = this.cookieService.get('password');

    // console.log('Login Component');
    // this.authService
    //   .checkSession()
    //   .subscribe(userData => {
    //     if (userData.status === 1) {
    //       this.router.navigateByUrl('dashboard');
    //     } else {
    //       this.router.navigateByUrl('/');
    //     }
    //     if (userData.status === 3) {
    //       this.authService
    //         .showLockedAlert('Error', userData.message);
    //     }
    //   });
  }

  login(form: any): void {
    if (form.username === '') {
      this.authService
        .showLockedAlert('Whoops!', 'Please enter a valid Username');
    }	else if (form.password === '') {
      this.authService
        .showLockedAlert('Whoops!', 'Please enter a valid Password');
    } else {
      this.authService
        .login(form)
        .subscribe(user => {
          if (user.status === 1) {
            // if ($('#remember-me').is(':checked')) {
            //   this.cookieService.set( 'username', form.username, 5);
            //   this.cookieService.set( 'password', form.password, 5);
            // }
            this.router.navigateByUrl('dashboard');
          } else {
            this.authService
              .showLockedAlert('Error', user.message);
          }
        });
    }
  }
  getEmail() {
    const email = $('#fp_email').val();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      this.authService
        .showLockedAlert('Whoops!', 'Please enter an Email');
    }   else if (re.test(email) !== true) {
      this.authService
        .showLockedAlert('Whoops!', 'Please enter a valid Email');
    } else {
      this.authService
        .showLockedAlert('Whoops!', 'Please enter a valid Email');
    }
  }
}
