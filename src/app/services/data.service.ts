import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'assets/data.json';

  private _productId = new BehaviorSubject<string>('');
  productId$ = this._productId.asObservable();

  constructor(private http: HttpClient) {}

  get data(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  get productId() {
    return this._productId.value;
  }

  set productId(id: string) {
    this._productId.next(id);
  }
}
