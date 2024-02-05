import {Payload} from "@shared";

export interface ProfilPayload extends Payload{
  nom: string;
  prenom: string;
  description: string;
  status: string;
  email: string;
  idProfil: string;
  credential_id: string;
  photoProfil: string;
}
