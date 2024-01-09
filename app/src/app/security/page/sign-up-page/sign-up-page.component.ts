import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SignInUpFormConfig} from "../../data";
import { SignInUpFormComponent } from "../../sign-in-up-form/sign-in-up-form.component";
import { SecurityFormUtilsService } from "../../service/security-form-utils.service";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, SignInUpFormComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

  readonly config: SignInUpFormConfig = SecurityFormUtilsService.signUpFormConfig();
}
