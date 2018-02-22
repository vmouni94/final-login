import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { UserService } from './user.service';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Injectable()
export class AuthenticationService {

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



  constructor(private user: UserService, private http:HttpClient) { }

  login(username : string, password: string){

    return this.http.post( 'http://localhost:8080/login',  { username: username, password: password })
  }

  signup(fullname:string,usermail: string,role:string,country:string,username : string, password: string){

    return this.http.post( 'http://localhost:8080/signup', {fullname:fullname,email: usermail,role:role,country:country, username: username, password: password }, { responseType: 'text' })
  }

  logout(){
    this.user.logoutUserService();
    localStorage.removeItem('currentUser');

  }

  userGetAll(){

    return this.http.get( 'http://localhost:8080/dashboard/admin')

  }


}

