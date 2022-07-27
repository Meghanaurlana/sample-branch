import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  add() {

  }
  update() {

  }
  delete() {

  }
  read() {

  }
}










export interface userdata {
  id?: number;
  name: string;
  email: string;
  phoneno: string
}