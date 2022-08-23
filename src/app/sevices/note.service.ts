import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  api: string = environment.apiUrl;
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
  }

  public getNotes(): Observable<any> {
    return this.http.get(`${this.api}/notes`, { headers: this.headers });
  }

  public deleteNote(id:number): Observable<any> {
    return this.http.delete(`${this.api}/notes/${id}`, { headers: this.headers });
  }
}
