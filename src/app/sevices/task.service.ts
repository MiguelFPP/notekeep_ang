import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
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

  public getTasks(): Observable<any> {
    return this.http.get(`${this.api}/tasks`, { headers: this.headers });
  }
}
