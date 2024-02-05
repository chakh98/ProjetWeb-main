import { Component, inject, OnInit } from '@angular/core';
import { AppNode } from "../../shared/routes/enum/node.enum";
import { Router } from "@angular/router";
import { DernierMiseAJourComponent } from "../dernier-mise-ajour/dernier-mise-ajour.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    DernierMiseAJourComponent
  ],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  private readonly router: Router = inject(Router);
  routeProfil() {
    this.router.navigate(["dashboard", AppNode.PROFIL]).then();
  }
  routeAccueil() {
    this.router.navigate(["", AppNode.AUTHENTICATED]).then();
    window.location.reload();
    window.scrollTo(0, 0);
  }


}
