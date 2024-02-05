import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {CommentaireCreatePayload} from "../payload/commentaire-create.payload";
import {ApiResponse} from "@shared";
import { ApiService } from 'app/shared/api/service/api.service';
import { CommentaireDto } from "../dto/commentaire.dto";
import { map, Observable, tap } from "rxjs";
import { ApiURI } from "../../shared/api/enum/api-uri";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private readonly api: ApiService = inject(ApiService);



  listComs$:WritableSignal<CommentaireDto[]> = signal([]);

  //publicationUsername$:WritableSignal<CredentialDto> = signal({username: ""});

  public commentaireCreate(payload: CommentaireCreatePayload): Observable<any> {
    return this.api.post(ApiURI.COMMENTAIRE_CREATE, payload);
  }

  public CommentaireList(idPublication: string): void {
    this.api.get(`${ApiURI.COMMENTAIRE_LIST}/${idPublication}`).pipe(tap((response:ApiResponse)=>{
      this.listComs$.set(response.data);
      console.log(response);
    })).subscribe()
  }
  public userCommentaireCount(): Observable<number> {
    return this.api.get(`${ApiURI.COUNT_C}`).pipe(map((response: ApiResponse) => response.data));
  }

}
