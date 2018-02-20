import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
declare let jquery: any;
declare let $: any;


@Injectable()
export class AuthService {
  hosturl: string = window.location.host;
  //domain="http://localhost:8080";
 
   user;

  loggedIn = false;
  constructor(private http: Http,private router: Router,) {}

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }


  // login(user) {
  //   this.loggedIn = true;
  //   return this.http.post(this.domain+'/api/login',user).map(res=>res.json());
  //
  // }
  login(user) {
    this.loggedIn = true;
    return this.http
      .post('/api/login', user)
      .map(res => res.json());
  }

  logout() {
    this.loggedIn = false;
    return this.router.navigateByUrl('/');
  }
  // registerUser(user: User): Promise<User> {
  //   return this.http
  //     .post(this.domain+'/api/register',user, {headers : this.headers})
  //     .toPromise()
  //     .then(res => res.json() as User)
  //     .catch(this.handleError);
  // }
  // registerUser(user){
  //   return this.http.post(this.domain+'/api/register',user).map(res=>res.json());
  // }
  // storeUserData(token,user){
  //   localStorage.setItem('token',token);
  //   localStorage.setItem('user',JSON.stringify(user));
  //   this.authToken=token;
  //   this.user=user;
  // }
  // private handleError(error: any): Promise<any> {
  //   console.error('Error', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  signup(user) {
    user.url = this.hosturl;
    return this.http
      .post('/api/signup', user)
      .map(res => res.json());
  }



  signupAlert(heading, msg) {
    const link = this.router.navigateByUrl('/register');
    $('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
    $('.modal-alert .modal-header h4').text(heading);
    $('.modal-alert .modal-body p').html(msg);
    $('.modal-alert').modal('show');
    $('.modal-alert button').click(function(){return link; });
    setTimeout(function(){ return link; }, 3000);
  }


  showLockedAlert(heading, msg) {
    const link = this.router.navigateByUrl('/');
    $('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
    $('.modal-alert .modal-header h4').text(heading);
    $('.modal-alert .modal-body p').html(msg);
    $('.modal-alert').modal('show');
    $('.modal-alert button').click(function(){return link; });
    setTimeout(function(){ return link; }, 3000);
  }
}





