import { Payload } from "@shared";


export interface ProfilCreatePayload extends Payload{
  nom: string;
  prenom: string;
  description: string;
  status: string;
}
