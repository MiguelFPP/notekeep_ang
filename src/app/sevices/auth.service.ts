import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api: string = environment.apiUrl;
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.api}/login`,
      { email, password },
      { headers: this.headers }
    );
  }

  logout(): Observable<any> {
    const headers = this.headers.append(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.post(`${this.api}/logout`, {}, { headers });
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.api}/register`, user, {
      headers: this.headers,
    });
  }
}
