import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import { AppNode } from "../../shared/routes/enum/node.enum";

export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const router: Router = inject(Router);
    const currentRoute = router.url;
    const isAuthenticated = !!localStorage.getItem('token');
    const canAccess: boolean = currentRoute.includes(AppNode.CREATE_PROFIL) || isAuthenticated;
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}







//const token = localStorage.getItem('token');
//const canAccess: boolean = token != null;// rajouter une vérification du token depuis l'api
