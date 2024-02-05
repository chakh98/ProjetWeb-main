import { Component, inject, Input } from '@angular/core';
import { ProfilUpdateFormConfig, PublicationCreateFormConfig } from "../../security/data";
import { ProfilService } from "../service/profil.service";
import { ProfilPayload } from "../payload/profil.payload";
import { PublicationCreatePayload } from "../payload/create-publication.payload";
import { NgForOf, NgIf } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-modifier-profil',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modifier-profil.component.html',
  styleUrl: './modifier-profil.component.scss'
})
export class ModifierProfilComponent {

  @Input({required: true}) config!: ProfilUpdateFormConfig;
  readonly profilService: ProfilService = inject(ProfilService);

  Modifier() {
    const payload : ProfilPayload = {
      idProfil: "string",
      ...this.config.formGroup.value
    }
    console.log('payload', payload);
    this.profilService.UpdateProfil(payload as ProfilPayload).subscribe();
  }



}
