import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {Observable, tap} from "rxjs";


import { SignInPayload } from "../data/payload";
import { SignUpPayload } from "../data/payload/sign-up.payload";
import { SecurityService } from "../service";
import { SignInUpFormConfig, SignInUpFormType } from "../data";
import { ApiResponse, Payload } from "../../shared";


@Component({
  selector: 'app-sign-in-up-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in-up-form.component.html',
  styleUrls: ['./sign-in-up-form.component.scss']
})
export class SignInUpFormComponent implements OnInit{
  @Input({required: true}) config!: SignInUpFormConfig;
  private readonly securityService: SecurityService = inject(SecurityService);

  title: string ='Connexion';
  btnLabel: string ='Se connecter';
  error$: WritableSignal<string> = signal('');

  ngOnInit() {
    this.title = this.config.type === SignInUpFormType.SIGN_IN ? 'Connexion' : 'Inscription';
    this.btnLabel = this.config.type === SignInUpFormType.SIGN_IN ? 'Se connecter' : 'S\'inscrire';
  }

  save(): void {
    this.error$.set('')
    if(this.config.formGroup.valid) {
      const payload: Payload = {...this.config.formGroup.value}
      const obs:Observable<ApiResponse> = this.config.type === SignInUpFormType.SIGN_IN ?
        this.securityService.signIn(payload as SignInPayload): this.securityService.signUp(payload as SignUpPayload)

      obs.pipe(
        tap((apiResponse: ApiResponse) => {
          if (!apiResponse.result) {
            this.error$.set(apiResponse.code)
          }
        })
      )
        .subscribe((data:ApiResponse) => {
          console.log('apiResponse', data);
        })
      // save
    } else {
      // show error
      this.error$.set('Formulaire non valide')
    }

  }
}
