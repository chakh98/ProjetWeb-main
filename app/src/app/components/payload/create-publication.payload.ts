import {Payload} from "@shared";

export interface PublicationCreatePayload extends Payload{
  contenu: string;
  typePublication: string;
  utilisateur: string;
}
