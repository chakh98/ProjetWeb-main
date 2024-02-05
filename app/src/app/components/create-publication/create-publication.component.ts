import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { PublicationService } from "../service/publication.service";
import {PublicationCreatePayload} from "../payload/create-publication.payload";
import { PublicationCreateFormConfig } from "../../security/data";


@Component({
  selector: 'app-create-publication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.scss']
})
export class PostMainComponent {



  private readonly publicationService: PublicationService = inject(PublicationService);

  @Input({required: true}) config!: PublicationCreateFormConfig;
  error$: WritableSignal<string> = signal('');

  save(): void {
    this.error$.set('');
    const payload: PublicationCreatePayload = {
      typePublication: 'text',
      utilisateur: {},
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.publicationService.publicationCreate(payload as PublicationCreatePayload).subscribe();
    alert("Publication Postée")
    window.location.reload();
  }



}
