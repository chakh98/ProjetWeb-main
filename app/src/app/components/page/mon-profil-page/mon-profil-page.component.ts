import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../header/header.component";
import { ProfilUpdateFormConfig, SignInUpFormConfig } from "../../../security/data";
import { SecurityFormUtilsService } from "../../../security/service/security-form-utils.service";
import { ProfilFormUtilsService } from "../../service/profil-form-utils.service";
import { ProfilService } from "../../service/profil.service";
import { ModifierProfilComponent } from "../../modifier-profil/modifier-profil.component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-mon-profil-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ModifierProfilComponent, ReactiveFormsModule],
  templateUrl: './mon-profil-page.component.html',
  styleUrl: './mon-profil-page.component.scss'
})
export class MonProfilPageComponent  {

  readonly config: ProfilUpdateFormConfig = ProfilFormUtilsService.profilUpdateFormCongig();
  readonly profilService: ProfilService = inject(ProfilService);
}
