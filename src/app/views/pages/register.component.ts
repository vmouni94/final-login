import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {UserService} from "../../services/user.service";
import {AuthenticationService} from "../../services/authentication.service";
import {AlertService} from "../../services/alert.service";

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullname:string;
  email: string;
  username: string;
  password: string;
  country : string;
  role:string;

  /*@ViewChild('username') username;
  @ViewChild('usermail') usermail;
  @ViewChild('password') password;
  @ViewChild('confirmpassword') confirmpassword;*/

  constructor(
    private router: Router,
    private user: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  signup(){


    if (this.email !== null && this.username !==null){


        this.authenticationService.signup(this.fullname,this.email,this.role,this.country,this.username, this.password)
          .subscribe(result => {
              if (result.length > 0){
                this.alertService.success(result,true);
                this.router.navigate(['/']);
              }
              else{
                this.alertService.error('Username already Exist try with another username ');
              }
            },
            error => {
              console.log('SignUp failed');
              console.log(error._body);
            });


    } else{
      alert("enter all the fields required");
      console.log("validation failed ");
    }

  }
  // console.log(this.user.username.value, this.user.email.value, this.user.password.value);
}
