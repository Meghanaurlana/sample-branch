import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public stringSubject = new Subject<string>();

  passValue(data: string) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }











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
