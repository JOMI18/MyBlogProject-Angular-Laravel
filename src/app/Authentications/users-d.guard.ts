import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersDGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let log = localStorage.getItem('loggedIn') || null;
    let adminlog = localStorage.getItem('AdminloggedIn') || null;
    if (log || adminlog) {
      return true;
    } else {
      alert('Hello, You need to Log in First ');
      this.router.navigate(['signup']);
      return false;
    }
    // return true;
  }
}
