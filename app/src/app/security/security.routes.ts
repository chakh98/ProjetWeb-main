import {Routes} from "@angular/router";
import { AppNode } from "../shared/routes/enum/node.enum";
import { CreateProfilComponent } from "./page/create-profil/create-profil.component";




export const securityRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page').then(p => p.SecurityRouterComponent),
    children: [
      {
        path: '',
        redirectTo: AppNode.SIGN_IN,
        pathMatch: 'full'
      },

      {
        path: AppNode.SIGN_IN,
        loadComponent: () => import('./page').then(c => c.SignInPageComponent)
      },

      {
        path: AppNode.SIGN_UP,
        loadComponent: () => import('./page').then(c => c.SignUpPageComponent)
      },
      {
        path: AppNode.CREATE_PROFIL,
        loadComponent: () => import('./page').then(c => c.CreateProfilComponent)
      },

      {
        path: AppNode.FALL_BACK,
        loadComponent: () => import('./page').then(c => c.SecurityFallBackPageComponent)
      },

    ]
  }
]
