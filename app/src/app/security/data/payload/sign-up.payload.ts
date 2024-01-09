import { Payload } from "../../../shared/model/business";


export interface SignUpPayload extends Payload{
  username: string;
  password: string;
  mail: string;
}
