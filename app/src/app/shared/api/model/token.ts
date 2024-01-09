import { IsEmpty } from "../../model/business";


export interface Token extends IsEmpty{
  token: string;
  refreshToken: string;

}
