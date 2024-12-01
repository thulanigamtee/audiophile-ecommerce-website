import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'assets/data.json';

  constructor(private http: HttpClient) {}

  get data(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
