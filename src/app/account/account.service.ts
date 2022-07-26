// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {

//   constructor() { }

//   addUser(user: UsersData): Observable<string> {
//     user.id = makeid()
//     usersData.push(user);
//     return of("Sucessfully Added")
//   }

//   editUser(user: UsersData): Observable<string> {
//     if (usersData.find(e => e.id === user.id)) {
//       usersData.find(e => e.id === user.id)!.email = user.email;
//       usersData.find(e => e.id === user.id)!.name = user.name;
//       usersData.find(e => e.id === user.id)!.phoneNumber = user.phoneNumber;
//       return of("Sucessfully Updated")
//     }
//     return of("Inavlid ID")
//   }

//   fetchUser(id?: string): Observable<UsersData | UsersData[] | undefined> {
//     if (id)
//       return of(usersData.find(e => e.id === id));
//     else
//       return of(usersData)
//   }

//   deleteUser(id: string): Observable<string> {
//     let index = usersData.findIndex(e => e.id === id);
//     if (index) {
//       usersData.splice(index, 1);
//       return of("Sucessfully Deleted")
//     }
//     return of("Invalid ID")
//   }

// }

// let usersData: UsersData[] = [];

// export interface UsersData {
//   id?: string;
//   name: string;
//   email: string;
//   phoneNumber: string;
// }

// function makeid() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 5; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }