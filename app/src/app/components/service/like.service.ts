import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import { map, Observable, of, switchMap, tap } from "rxjs";
import {ApiURI} from "../../shared/api/enum/api-uri";
import {ApiService} from "../../shared/api/service/api.service";
import {LikePayload} from "../payload/like-payload";
import {ApiResponse} from "@shared";
import {LikeDto} from "../dto/like.dto";
import { DateDto } from "../dto/date.dto";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private readonly api: ApiService = inject(ApiService);

  listLikePubli$:WritableSignal<LikeDto[]> = signal([]);
  getdate$:WritableSignal<DateDto> = signal({data: ""});

  public likeCreate(payload: LikePayload): Observable<any> {
    return this.api.post(ApiURI.LIKE_CREATE, payload);
  }
  public likePublicationList(idPublication: string): void {
    this.api.get(`${ApiURI.LIKE_PUBLICATION_LIST}/${idPublication}`).pipe(tap((response:ApiResponse)=>{
      this.listLikePubli$.set(response.data);
      console.log(response);
    })).subscribe()
  }
  public datelastlike():void {
    this.api.get(ApiURI.DATE_LIKE).pipe(tap((response:ApiResponse)=>{
      this.getdate$.set(response.data);
    })).subscribe();
  }

}
