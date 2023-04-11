import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDeActiveGuard implements CanDeactivate<unknown> {
  constructor(private empService:EmployeeService){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let Logged=this.empService.isAuthenticated();
      if(Logged){
        return confirm("you are logged")
      }
      else{
        return confirm("!ERROR")
      }
  }
  
}
