import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NombrePCComponent } from "../nombre-pc/nombre-pc.component";

@Component({
  selector: 'app-mon-profil',
  standalone: true,
  imports: [CommonModule, NombrePCComponent],
  templateUrl: './mon-profil.component.html',
  styleUrl: './mon-profil.component.scss'
})
export class MonProfilComponent {

}
