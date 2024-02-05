import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { MonProfilComponent } from "../../mon-profil/mon-profil.component";
import { HeaderComponent } from "../../header/header.component";
import { PostMainComponent } from "../../create-publication/create-publication.component";
import { PublicationListComponent } from "../../list-publication/list-publication.component";
import { PublicationCreateFormConfig } from "../../../security/data";
import { PublicationFormUtilsService } from "../../service/publication-form-utils.service";
import { NombrePCComponent } from "../../nombre-pc/nombre-pc.component";

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    CommonModule,
    MonProfilComponent,
    HeaderComponent,
    PostMainComponent,
    PublicationListComponent,
    NombrePCComponent
  ]
})
export class DashboardHomePageComponent {

  readonly config: PublicationCreateFormConfig = PublicationFormUtilsService.publicationCreateFormConfig();
}
