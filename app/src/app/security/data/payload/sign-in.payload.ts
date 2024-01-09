import { Payload } from "../../../shared/model/business";


export interface SignInPayload extends Payload{
  username: string;
  password: string;
}
