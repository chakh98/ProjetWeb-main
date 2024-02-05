import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import { map, Observable, of, switchMap, tap } from "rxjs";
import {ApiURI} from "../../shared/api/enum/api-uri";
import {ApiService} from "../../shared/api/service/api.service";
import {LikePayload} from "../payload/like-payload";
import {ApiResponse} from "@shared";
import {LikeDto} from "../dto/like.dto";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private readonly api: ApiService = inject(ApiService);

  listLikePubli$:WritableSignal<LikeDto[]> = signal([]);

  public likeCreate(payload: LikePayload): Observable<any> {
    return this.api.post(ApiURI.LIKE_CREATE, payload);
  }
  public likePublicationList(idPublication: string): void {
    this.api.get(`${ApiURI.LIKE_PUBLICATION_LIST}/${idPublication}`).pipe(tap((response:ApiResponse)=>{
      this.listLikePubli$.set(response.data);
      console.log(response);
    })).subscribe()
  }

}
