import {Payload} from "@shared";

export interface LikePayload extends Payload{
  idLike: string;
  credential_id: string;
  idPublication: string;
  idCommentaire: string;
}
