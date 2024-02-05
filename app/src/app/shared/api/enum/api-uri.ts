export enum ApiURI{
  SIGN_IN='account/signin',
  SIGN_UP='account/signup',
  ME='account/me',
  CREATE_PROFIL = 'account/create-profil',
  REFRESH_TOKEN = 'account/refresh',
  PUBLICATION_CREATE = 'publication/create',
  PUBLICATION_LIST = 'publication/list',
  PUBLICATION_DETAIL = 'publication/publication-detail',
  DELETE_PUBLICATION = 'publication/delete',
  PROFIL_LIST = 'profil/profil-detail',
  COMMENTAIRE_CREATE = 'commentaire/create',
  COMMENTAIRE_LIST = 'commentaire/list',
  COMMENTAIRE_LIST_SELECTED = 'commentaire/list',
  PROFIL_UPDATE = 'profil/update-user',
  COUNT_P = 'publication/count-p',
  COUNT_C = 'commentaire/count-c',
  DATE_PUBLICATION = 'publication/last-publication-date',
  DATE_COMMENTAIRE = 'last-comment-date',
  LIKE_CREATE = 'like',
  LIKE_PUBLICATION_LIST = 'like/list/:idPublication'


}
