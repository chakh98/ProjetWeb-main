import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import { map, Observable, tap } from "rxjs";
import { PublicationDto } from "../dto/publication.dto";
import { CredentialDto } from "../dto/credential.dto";
import { ApiURI } from "../../shared/api/enum/api-uri";
import { ApiResponse } from "@shared";
import {PublicationCreatePayload} from "../payload/create-publication.payload";
import {ApiService} from "../../shared/api/service/api.service";
import { ApiResponseProperty } from "@nestjs/swagger";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api: ApiService = inject(ApiService);


  // Signal
  list$:WritableSignal<PublicationDto[]> = signal([]);

  publicationUsername$:WritableSignal<CredentialDto> = signal({username: ""});

  public publicationCreate(payload: PublicationCreatePayload): Observable<any> {
    return this.api.post(ApiURI.PUBLICATION_CREATE, payload);
  }
  public publicationList(): void {
    this.api.get(ApiURI.PUBLICATION_LIST).pipe(tap((response:ApiResponse)=>{
      this.list$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public publicationDetail():void {
    this.api.get(ApiURI.PUBLICATION_DETAIL).pipe(tap((response:ApiResponse)=>{
      this.publicationUsername$.set(response.data);
    })).subscribe();
  }

  public deletePublication(idPublication: string):void{
    this.api.delete(`${ApiURI.DELETE_PUBLICATION}/${idPublication}`).subscribe();
  }
  public userPublicationCount(): Observable<number> {
    return this.api.get(`${ApiURI.COUNT_P}`).pipe(map((response: ApiResponse) => response.data));
  }

}

