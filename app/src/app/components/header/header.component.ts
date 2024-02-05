import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TokenService } from "../../shared/api/service/token.service";
import { Router } from "@angular/router";
import { AppNode } from "../../shared/routes/enum/node.enum";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private readonly  tokenService: TokenService = inject(TokenService);
  private readonly  router: Router = inject(Router);

    logOut(): void {
      console.log('');
      this.tokenService.setToken({token: '', refreshToken: '', isEmpty: true});
      this.router.navigate(["account/", AppNode.SIGN_IN]).then();
  }
  routeProfil() {
    this.router.navigate(["dashboard", AppNode.PROFIL]).then();
  }
  routeAccueil() {
    this.router.navigate(["", AppNode.AUTHENTICATED]).then();
    window.scrollTo(0, 0);
  }
}
