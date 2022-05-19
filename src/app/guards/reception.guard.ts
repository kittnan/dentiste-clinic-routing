import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../components/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionGuard implements CanActivate {
  constructor(
    private auth :AuthService,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    if(localStorage.getItem('token') && localStorage.getItem('access') ==='reception')return true
    this.router.navigate(['login'])
    return false
  }
}
