import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  constructor(private http: HttpClient) {}

  createPublication(content: string): Observable<any> {
    return this.http.post('/api/publications', { content });
  }

  likePublication(publicationId: number): Observable<any> {
    return this.http.post(`/api/publications/${publicationId}/like`, {});
  }

  commentOnPublication(publicationId: number, comment: string): Observable<any> {
    return this.http.post(`/api/publications/${publicationId}/comment`, { comment });
  }
}
