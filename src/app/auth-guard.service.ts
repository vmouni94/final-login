import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild, ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import {UserService} from "./services/user.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  role: String;
  constructor(private user:UserService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.getUserLogService()){
      return true;
    }

    else {
      this.router.navigate(['/']);
    }
    return false;
  // .checkSession()
  //     .map(userData => {
  //       if (userData.status === 1) {
  //         this.role = userData.role;
  //
  //         return true;
  //       } else {
  //
  //         this.router.navigate(['/']);
  //         return false;
  //       }
  //       // console.log(this.IsLogin);
  //     });
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
