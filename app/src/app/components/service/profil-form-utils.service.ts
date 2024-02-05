import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ProfilFormType,
  ProfilUpdateFormConfig,
  ProfilFieldEnum, ProfilUpdateField
} from '../../security/data';

@Injectable({
  providedIn: 'root',
})
export class ProfilFormUtilsService {
  public static ProfilUpdateFormFieldGroup(): FormGroup {
    return new FormGroup<any>({
      [ProfilFieldEnum.NOM]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [ProfilFieldEnum.PRENOM]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [ProfilFieldEnum.DESCRIPTION]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
      [ProfilFieldEnum.STATUS]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [ProfilFieldEnum.EMAIL]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      [ProfilFieldEnum.PHOTO_PROFIL]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    });
  }

  public static profilUpdateFormCongig(): ProfilUpdateFormConfig {
    const formGroup: FormGroup = ProfilFormUtilsService.ProfilUpdateFormFieldGroup();
    return {
      formGroup,
      type: ProfilFormType.UPDATE,
      fields:[
        ProfilFormUtilsService.getNomField(formGroup),
        ProfilFormUtilsService.getPrenomField(formGroup),
        ProfilFormUtilsService.getDescriptionField(formGroup),
        ProfilFormUtilsService.getStatusField(formGroup),
        ProfilFormUtilsService.getEmailField(formGroup),
        ProfilFormUtilsService.getPhotoProfilField(formGroup)
      ]
    };
  }

  public static getNomField(formGroup: FormGroup): ProfilUpdateField {
    return {
      label: 'Nom',
      inputType: 'text',
      placeHolder: 'Entrez votre nom',
      control: ProfilFormUtilsService.getFormControl(formGroup, ProfilFieldEnum.NOM),
    };
  }

  public static getPrenomField(formGroup: FormGroup): ProfilUpdateField {
    return {
      label: 'Prenom',
      inputType: 'text',
      placeHolder: 'Entrez votre prénom',
      control: ProfilFormUtilsService.getFormControl(formGroup, ProfilFieldEnum.PRENOM),
    };
  }

  public static getDescriptionField(formGroup: FormGroup): ProfilUpdateField {
    return {
      label: 'Description',
      inputType: 'text',
      placeHolder: 'Entrez votre description',
      control: ProfilFormUtilsService.getFormControl(formGroup, ProfilFieldEnum.DESCRIPTION),
    };
  }

  public static getStatusField(formGroup: FormGroup): ProfilUpdateField {
    return {
      label: 'Status',
      inputType: 'text',
      placeHolder: 'Entrez votre status',
      control: ProfilFormUtilsService.getFormControl(formGroup, ProfilFieldEnum.STATUS),
    };
  }

  public static getEmailField(formGroup: FormGroup): ProfilUpdateField {
    return {
      label: 'Email',
      inputType: 'text',
      placeHolder: 'Entrez votre email',
      control: ProfilFormUtilsService.getFormControl(formGroup, ProfilFieldEnum.EMAIL),
    };
  }

  public static getPhotoProfilField(formGroup: FormGroup): ProfilUpdateField {
    return {
      label: 'Photo de Profil',
      inputType: 'text',
      placeHolder: 'Entrez votre photo de profil',
      control: ProfilFormUtilsService.getFormControl(formGroup, ProfilFieldEnum.PHOTO_PROFIL),
    };
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }
}
