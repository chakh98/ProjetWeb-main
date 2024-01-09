import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";


import {SignInUpFormConfig} from "../../data";
import { SignInUpFormComponent } from "../../sign-in-up-form/sign-in-up-form.component";
import { SecurityFormUtilsService } from "../../service/security-form-utils.service";
import { SimpleButtonComponent } from "../../../shared";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, SimpleButtonComponent, FormsModule, ReactiveFormsModule, SignInUpFormComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {

  readonly config: SignInUpFormConfig = SecurityFormUtilsService.signInFormConfig();


}
