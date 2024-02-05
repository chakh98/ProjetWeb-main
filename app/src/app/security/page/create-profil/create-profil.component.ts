import { Component, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../../service';
import { TokenService } from '../../../shared/api/service/token.service';
import { ProfilCreatePayload } from '../../data/payload';
import { SecurityFormUtilsService } from "../../service/security-form-utils.service";
import { catchError, EMPTY } from "rxjs";

@Component({
  selector: 'app-create-profil',
  templateUrl: './create-profil.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./create-profil.component.scss']
})
export class CreateProfilComponent {
  profilForm: FormGroup;
  error$: WritableSignal<string> = signal('');

  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.profilForm = SecurityFormUtilsService.createProfilFormGroup();
  }

  createProfil(): void {
    this.error$.set(''); // Efface toute erreur précédente

    if (this.profilForm.valid) {
      const payload: ProfilCreatePayload = { ...this.profilForm.value };
      console.log('payload', payload);

      this.securityService.createProfil(payload).pipe(
        catchError((error) => {
          // Gérer les erreurs ici
          console.error('Erreur lors de la création du profil:', error);

          // Enregistrez l'erreur dans error$ pour une éventuelle utilisation dans le composant
          this.error$.set('Une erreur s\'est produite lors de la création du profil.');

          // Renvoyer un observable vide pour éviter que l'erreur ne soit propagée
          return EMPTY;
        })
      ).subscribe(response => {
        if (response.result) {
          this.tokenService.setToken(response.data);
          alert('Profil créé');
          this.router.navigate(['/dashboard']);
        } else {
          // Gérer le cas où la création du profil a échoué
          alert('Échec de la création du profil');
          window.location.reload();
        }
      });
    } else {
      this.error$.set('Formulaire non valide');
    }
  }
}
