import { Payload } from "@shared";


export interface SignUpPayload extends Payload{
  username: string;
  password: string;
  mail: string;
}
