
import { Component, Input, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
})
export class CommentSectionComponent implements OnInit {
  @Input() comments: any[] = [];
  addComment(newCommentText: string) {
    // Logique pour ajouter un commentaire
  }


  ngOnInit() {
}
}
