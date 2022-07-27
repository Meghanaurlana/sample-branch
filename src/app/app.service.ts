import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private message = new BehaviorSubject<string>("hello morning")
  private messages = new BehaviorSubject<string>("hello mornings")
  newmessage = this.message.asObservable();
  newmessages = this.messages.asObservable();
  constructor() { }
  updatemessage(newmessage: string) {
    this.message.next(newmessage);

  }
  errormessage(newmessages: string) {
    this.messages.error(newmessages)
  }
}
