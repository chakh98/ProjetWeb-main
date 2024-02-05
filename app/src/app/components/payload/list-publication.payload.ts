import {Payload} from "@shared";


export interface PublicationListPayload extends Payload{
  contenu: string;
  typePublication: string;
  posteur: string;
  created: Date;
}
