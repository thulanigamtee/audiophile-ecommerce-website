import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new BehaviorSubject<boolean>(false);
  modalSubject$ = this.modalSubject.asObservable();

  set modal(state: boolean) {
    this.modalSubject.next(state);
  }

  get modal() {
    return this.modalSubject.value;
  }

  constructor() {}
}
