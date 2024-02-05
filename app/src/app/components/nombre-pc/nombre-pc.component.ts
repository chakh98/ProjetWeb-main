import {Component, inject, Input, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../service/publication.service";
import {ProfilService} from "../service/profil.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentaireCreatePayload} from "../payload/commentaire-create.payload";
import {CommentaireService} from "../service/commentaire.service";
import {CommentaireCreateFormConfig} from "../../security/data";
import { ApiResponse } from "@shared";
import { ApiURI } from "../../shared/api/enum/api-uri";
import { TokenService } from "../../shared/api/service/token.service";



@Component({
  selector: 'app-nombre-pc',
  standalone: true,
  imports: [],
  templateUrl: './nombre-pc.component.html',
  styleUrl: './nombre-pc.component.scss'
})
export class NombrePCComponent {

  public publicationCount: number = 0;
  public commentaireCount: number = 0;

  readonly publicationService: PublicationService = inject(PublicationService);
  readonly profilService: ProfilService = inject(ProfilService);
  readonly commentaireService: CommentaireService = inject(CommentaireService)
  ngOnInit(): void {
    this.publicationService.publicationList();
    this.profilService.profilGet();
    this.countPublications();
    this.countCommentaires();




  }
  countPublications(): void {
    this.publicationService.userPublicationCount().subscribe((count: number) => {
      this.publicationCount = count;
    });
  }

  countCommentaires(): void {
    this.commentaireService.userCommentaireCount().subscribe((count: number) => {
      this.commentaireCount = count;
    });
  }

}
