import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  status?: string;
  errorMessage?: string;
  baseURL = '${environment.apiHost}';

  constructor(private http: HttpClient) {}

  getStatus(): void {
    this.http.get(`${environment.apiHost}/`);
  }

  getAllList(): Observable<{ message: string[] }> {
    return this.http.get<{ message: string[] }>(`${environment.apiHost}/list`);
  }
  getList(id: string): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(
      `${environment.apiHost}/list/${id}`
    );
  }
  postList(data: string): void {
    this.http.post(`${environment.apiHost}/list`, data);
  }
  deleteList(id: string): void {
    this.http.delete(`${environment.apiHost}/list/${id}`).subscribe({
      next: (data) => {
        this.status = 'delete';
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.log('error delete request : ', error);
      },
    });
  }
  deleteAllList(): void {
    this.http
      .delete(`${environment.apiHost}/list`)
      .subscribe(() => (this.status = 'delete successful'));
  }
}
