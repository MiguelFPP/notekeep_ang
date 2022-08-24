import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Task } from '../models/task';

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

  public addTask(task: Task): Observable<any> {
    return this.http.post(`${this.api}/tasks`, task, { headers: this.headers });
  }

  public deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.api}/tasks/${id}`, {
      headers: this.headers,
    });
  }

  public changeStatus(id: number): Observable<any> {
    return this.http.post(
      `${this.api}/tasks/${id}/completed`,
      {},
      { headers: this.headers }
    );
  }
}
