import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private stateSubject = new BehaviorSubject<boolean>(false);
  state$ = this.stateSubject.asObservable();

  private messageSubject = new BehaviorSubject<string>('');
  message$ = this.messageSubject.asObservable();

  get toastState() {
    return this.stateSubject.value;
  }

  set toastState(state: boolean) {
    this.stateSubject.next(state);
  }

  get message() {
    return this.messageSubject.value;
  }

  set message(message: string) {
    this.messageSubject.next(message);
  }

  displayToastMessage(message: string) {
    setTimeout(() => {
      this.toastState = true;
    }, 500);
    this.message = message;
    setTimeout(() => {
      this.toastState = false;
    }, 2000);
  }
}
