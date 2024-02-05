import { Component, inject } from '@angular/core';
import { PublicationService } from "../service/publication.service";
import { ProfilService } from "../service/profil.service";
import { CommentaireService } from "../service/commentaire.service";
import { DatePipe, NgIf } from "@angular/common";
import { LikeService } from "../service/like.service";
import { LikeDto } from "../dto/like.dto";

@Component({
  selector: 'app-dernier-mise-ajour',
  standalone: true,
  imports: [
    NgIf,
    DatePipe
  ],
  templateUrl: './dernier-mise-ajour.component.html',
  styleUrl: './dernier-mise-ajour.component.scss'
})
export class DernierMiseAJourComponent {

  readonly publicationService: PublicationService = inject(PublicationService);
  readonly commentaireService: CommentaireService = inject(CommentaireService);
  readonly likeService: LikeService = inject(LikeService);
  ngOnInit(): void {
    this.publicationService.datelastpublication();
    this.commentaireService.datelastcommentaire();
    this.likeService.datelastlike();
  }


  }

