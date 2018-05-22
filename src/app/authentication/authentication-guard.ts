import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
        let param = route.params.id.split(" ");
        let user = param[0];
        let pass = param[1];        
        return  (user ==='admin' && pass ==='Todo1');
        // return true;
      }
  }