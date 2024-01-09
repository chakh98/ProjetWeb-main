
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreatePublicationComponent } from '../components/create-publication/create-publication.component';
import { PublicationComponent } from '../components/publication/publication.component';
import { LikeButtonComponent } from '../components/publication/like-button.component';
import { CommentSectionComponent } from '../components/publication/comment-section.component';
import { PublicationService } from '../services/publication.service';
import { appRoutes } from './app.routes';
import { CommonModule} from '@angular/common';
import { DashboardModule } from "../dashboard/dashboard.module";
import { SidebarComponent } from "../sidebar/sidebar.component";




@NgModule({
  declarations: [
    PublicationComponent,
    LikeButtonComponent,
    CommentSectionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardModule,
    RouterModule,
  ],
  providers: [PublicationService],
  exports: [
    PublicationComponent
  ],

})
export class AppModule {}
