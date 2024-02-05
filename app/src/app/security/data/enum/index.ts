import { FormControl, FormGroup } from "@angular/forms";

export enum FormFieldEnum {
  USERNAME = 'username',
  PASSWORD = 'password',
  CONFIRMATION = 'confirmation',
  MAIL = 'mail'

}
export enum ProfilCreateFormFieldEnum {
  NOM = 'nom',
  PRENOM = 'prenom',
  DESCRIPTION = 'description',
  STATUS = 'status',
}

export enum ProfilFieldEnum {
  NOM = 'nom',
  PRENOM = 'prenom',
  DESCRIPTION = 'description',
  STATUS = 'status',
  EMAIL = 'email',
  PHOTO_PROFIL = 'photoProfil'
}
export enum SignInUpFormType {
  SIGN_IN ='SIGN_IN',
  SIGN_UP ='SIGN_UP'
}

export enum PublicationCreateType {
  TEXT ='text',
  IMAGE ='IMAGE',
  VIDEO ='VIDEO'
}

export enum PublicationCreateFormFieldEnum {
  CONTENU = 'contenu',
}

export enum CommentaireCreateFormFieldEnum {
  CONTENU = 'contenu',
}
export enum ProfilFormType {
  UPDATE ='update',
  CREATE = 'create'
}
