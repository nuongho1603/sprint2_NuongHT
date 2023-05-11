import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.getToken()) {
      if (this.tokenService.getRole() == 'ROLE_USER' || this.tokenService.getRole() == 'ROLE_ADMIN' && this.tokenService.isLogger()) {
        return true;
      } else {
        this.router.navigateByUrl('**');
        return false;
      }
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
