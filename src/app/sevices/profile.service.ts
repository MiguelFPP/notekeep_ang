import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
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

  public getInfoProfile(): Observable<any> {
    return this.http.get(`${this.api}/profile`, { headers: this.headers });
  }

  public updateProfile(user: User): Observable<any> {
    return this.http.post(`${this.api}/profile`, user, {
      headers: this.headers,
    });
  }
}
