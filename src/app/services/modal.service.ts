import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new BehaviorSubject<boolean>(false);
  modal$ = this.modalSubject.asObservable();

  set modalState(state: boolean) {
    this.modalSubject.next(state);
  }

  get modalState() {
    return this.modalSubject.value;
  }

  constructor() {}
}
