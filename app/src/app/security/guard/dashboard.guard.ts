import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import { AppNode } from "../../shared/routes/enum/node.enum";

export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const canAccess: boolean = true; // Cette valeur sera calculée par le service plus tard
    const router: Router = inject(Router);// Nous faisons une DI pour récupérer le système de Router
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}







//const token = localStorage.getItem('token');
//const canAccess: boolean = token != null;// rajouter une vérification du token depuis l'api
