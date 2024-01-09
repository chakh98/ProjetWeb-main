import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';


@Component({
  selector: 'app-create-publication.component',
  templateUrl: './create-publication.component.html',
  standalone: true,
  styleUrls: ['./create-publication.component.scss']
})
export class CreatePublicationComponent {
  content: string = '';
  comments: (Iterable<unknown> & Iterable<any>) | undefined | null;

  constructor(private publicationService: PublicationService) {}

  createPublication() {
    if (this.content.trim() !== '') {
      this.publicationService.createPublication(this.content).subscribe(() => {
        // Réinitialise le contenu après la création de la publication
        this.content = '';
      });
    }
  }

  addComment(value: string) {

  }
}
