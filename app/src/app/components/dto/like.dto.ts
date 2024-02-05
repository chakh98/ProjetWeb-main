import {CredentialDto} from "./credential.dto";

export interface LikeDto{
  idLike: string
  credential_id: CredentialDto;
  idPublication: string;
  idCommentaire: string;
}
