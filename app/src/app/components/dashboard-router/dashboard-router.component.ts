import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import { AppRoutes } from "../../shared/routes/enum/route.enum";
import { SidebarComponent } from "../sidebar/sidebar.component";


@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,SidebarComponent],
  templateUrl: './dashboard-router.component.html',
  styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent {
  routes = AppRoutes;

}
