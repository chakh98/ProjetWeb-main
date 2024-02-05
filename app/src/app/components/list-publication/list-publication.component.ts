import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../service/publication.service";
import {ProfilService} from "../service/profil.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentaireCreatePayload} from "../payload/commentaire-create.payload";
import {CommentaireService} from "../service/commentaire.service";
import {CommentaireCreateFormConfig} from "../../security/data";
import {LikeService} from "../service/like.service";
import { LikePayload } from "../payload/like-payload";
import { LikeDto } from "../dto/like.dto";


@Component({
  selector: 'app-list-publication',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class PublicationListComponent {

  @Input({required: true}) config!: CommentaireCreateFormConfig;


  readonly publicationService: PublicationService = inject(PublicationService);
  readonly profilService: ProfilService = inject(ProfilService);
  readonly commentaireService: CommentaireService = inject(CommentaireService);
  readonly likeService: LikeService = inject(LikeService);
  selectedPublicationId: string | null = null;
  protected readonly String = String;



  ngOnInit(): void {
    this.publicationService.publicationList();
    this.profilService.profilGet();
    this.publicationService.publicationDetail();
    this.publicationService.deletePublication('');

    console.log(this.profilService.Profil$())
  }

  voirCommentaire(idPublication: string) {
    if (this.selectedPublicationId === idPublication) {
      this.selectedPublicationId = null;
    } else {
      this.selectedPublicationId = idPublication;
      this.commentaireService.CommentaireList(idPublication);
    }
  }
  Commenter(idPublication: string) {
    const payload: CommentaireCreatePayload = {
      credential_id: {},
      idPublication,
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.commentaireService.commentaireCreate(payload as CommentaireCreatePayload).subscribe();
    alert("Commentaire Posté")

  }
  LikePublication(idPublication: string) {
    const payload: LikePayload = {
      credential_id: {},
      idPublication,
      ...this.config.formGroup.value
    };

    this.likeService.likeCreate(payload as LikePayload).subscribe(response => {
      if (response.message) {
        alert(response.message);
      } else {
        alert("Publication Aimé");
      }
    });
  }
  supprimerPublication(idPublication: string): void {
    this.publicationService.deletePublication(idPublication);
    alert("Publication supprimée avec succès");
  }
}
