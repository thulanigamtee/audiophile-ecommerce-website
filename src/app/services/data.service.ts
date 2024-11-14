import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'assets/data.json';

  private productIdSubject = new BehaviorSubject<string>('');
  productId$ = this.productIdSubject.asObservable();

  constructor(private http: HttpClient) {}

  get data(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }

  get productId() {
    return this.productIdSubject.value;
  }

  set productId(id: string) {
    this.productIdSubject.next(id);
  }
}
