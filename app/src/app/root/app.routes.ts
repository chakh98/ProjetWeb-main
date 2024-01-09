import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [
  { path: 'dashboard', component: AppComponent } ,

  {
    path: 'Publication',
    loadComponent: () => import('../components/create-publication/create-publication.component').then(r => r.CreatePublicationComponent)
  },
  {
    path: 'Comment',
    loadComponent: () => import('../components/publication/comment-section.component').then(r => r.CommentSectionComponent)
  },
];

