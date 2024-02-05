import {CredentialDto} from "./credential.dto";
import { LikeDto } from "./like.dto";

export interface PublicationDto{
  credential_id: CredentialDto;
  idPublication: string;
  created: Date;
  contenu: string;
  typePublication: string;
  likes:LikeDto[];
}
