import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth.service';


@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultRole = 'developer';
  defaultCountry = 'usa';
  messageClass;
  message;

  user: any = {};
  // user = new User;
  submitted = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  // newUser(): void {
  //   this.submitted = false;
  //   this.user = new User();
  // }
  // private save(): void {
  //   this.authService.registerUser(this.user);
  // }
  // onSubmit() {
  //   console.log(this.signupForm);
  //   // this.user.fullname = this.signupForm.value.fullname;
    // this.user.email = this.signupForm.value.email;
    // this.user.role = this.signupForm.value.role;
    // this.user.country = this.signupForm.value.country;
    // this.user.username = this.signupForm.value.username;
    // this.user.password = this.signupForm.value.password;
    // this.signupForm.reset();
    // this.submitted = true;
    // this.save();
    // this.router.navigate(['../login'], {relativeTo: this.route});
    // if (this.email !== null && this.username !==null){
    //
    //
    //     this.authService.onSubmit(e)
    //       .subscribe(result => {
    //           if (result.length > 0){
    //
    //             this.router.navigate(['login']);
    //           }
    //           else{
    //             this.alertService.error('Username already Exist try with another username ');
    //           }
    //         },
    //         error => {
    //           console.log('SignUp failed');
    //           console.log(error._body);
    //         });
    //   }
    //   else{
    //     this.alertService.error("Password and confirm Password didn't matched");
    //   }
    //
    // } else{
    //   alert("enter all the fields required");
    //   console.log("validation failed ");
    // }
    //
    // }
  //}
  signup(form: any): void {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (form.name === '') {
      this.authService
        .signupAlert('Whoops!', 'Please enter a valid Name');
    } else if (form.email === '') {
      this.authService
        .signupAlert('Whoops!', 'Please enter a valid Email');
    } else if (re.test(form.email) !== true) {
      this.authService
        .signupAlert('Whoops!', 'Please enter a valid Email');
    } else if (form.role === '') {
      this.authService
        .signupAlert('Whoops!', 'Please select a role');
    } else if (form.country === '') {
      this.authService
        .signupAlert('Whoops!', 'Please select a Country');
    } else if (form.user === '') {
      this.authService
        .signupAlert('Whoops!', 'Please enter a valid Username');
    } else if (form.pass === '') {
      this.authService
        .signupAlert('Whoops!', 'Please enter a valid Password');
    } else if (form.pass.length >= 8) {
      this.authService
        .signupAlert('Whoops!', 'Password must contain atleast 8 character');
    } else {
      this.authService
        .signup(form)
        .subscribe(user => {
          if (user.status === 1) {
            // this.authService
            //   .showLockedAlert('Success!', 'Your account has been created.<br>Please confirm your email to verify.');
            // // this.router.navigateByUrl('/');
            this.messageClass='alert alert-success';
            this.message='Your account has been created.<br>Please confirm your email to verify.';

          } else {
            // this.authService
            //   .signupAlert('Whoops!', user.message);
            this.messageClass='alert alert-danger';
            this.message=user.message;
          }
        });
    }
  }
}
