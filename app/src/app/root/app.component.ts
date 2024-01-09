
import { Component } from '@angular/core';
import { appRoutes } from "./app.routes";
import { CreatePublicationComponent } from "../components/create-publication/create-publication.component";
import { AppModule } from "./app.module";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    DashboardComponent,
    AppModule,
    RouterOutlet,
    SidebarComponent,
  ]
})
export class AppComponent {
}
