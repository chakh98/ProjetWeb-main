import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
})
export class LikeButtonComponent {
  @Input() isLiked = false;

  likePublication() {
    this.isLiked = !this.isLiked;

  }
}
