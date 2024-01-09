import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
})
export class PublicationComponent {
  @Input() publication: any;
}
