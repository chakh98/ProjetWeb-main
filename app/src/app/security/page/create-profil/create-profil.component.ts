import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../../service';
import { TokenService } from '../../../shared/api/service/token.service';
import { ProfilCreatePayload } from '../../data/payload';
import { SecurityFormUtilsService } from "../../service/security-form-utils.service";

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

  constructor(
    private formBuilder: FormBuilder,
    private securityService: SecurityService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.profilForm = SecurityFormUtilsService.createProfilFormGroup();
  }

  createProfil() {
    if (this.profilForm.valid) {
      const payload: ProfilCreatePayload = this.profilForm.value;
      this.securityService.createProfil(payload).subscribe(response => {
        if (response.result) {
          this.tokenService.setToken(response.data);
          this.router.navigate(['/dashboard']);
        } else {
        }
      });
    }
  }
}
