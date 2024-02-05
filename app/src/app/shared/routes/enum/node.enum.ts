export enum AppNode {
  AUTHENTICATED = 'dashboard',
  CREATE_PROFIL ='create-profil',
  PUBLIC = 'account',
  REDIRECT_TO_PUBLIC = AppNode.PUBLIC,
  REDIRECT_TO_AUTHENTICATED = AppNode.AUTHENTICATED,
  MEMBER = 'member',
  DETAIL = 'detail/:id',
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  FALL_BACK = '**',
  PROFIL = 'profil',

}
