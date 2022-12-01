import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalService } from './global.service';
//for not allowing acces to any other url
@Injectable({
  providedIn: 'root'
})
export class RoutingGuardService implements CanActivate {

  constructor(public global: GlobalService, public router: Router) { }
  canActivate(route: any): boolean {
    if (this.global.loginSuccess) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }

  }
}
