import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  users: UsersData[] = [];
  usersData: unknown;
user:any;
  
  constructor() { }

  private newUser = new BehaviorSubject<any>({
  });


  addUser(user: any) {
    this.newUser.next(user);
  }

  fetchUser() {
    return this.newUser.asObservable();
  }




























  // addUser(user: any): Observable<string> {
  //   user.id = makeid()
  //   usersData.push(user);
  //   return of("Sucessfully Added")
  // }



  // fetchUser(id?: string): Observable<UsersData | UsersData[] | undefined> {
  //   if (id)
  //     return of(usersData.find(e => e.id === id));
  //   else
  //     return of(usersData)
  // }

  // public addUser(user:UsersData):any |string|undefined{
  //   const userObservable = new Observable(observer =>{
  //     user.id = makeid()
  //     usersData.push(user);
  //     observer.next(this.usersData)
      
  //   })

  // }



  // fetchUser(id?: string): Observable<UsersData | UsersData[] | undefined> {
  //   if (id)
  //     return of(usersData.find(e => e.id === id));
  //   else
  //     return of(usersData)
  // }


  // deleteUser(id: string): Observable<string> {
  //   let index = usersData.findIndex(e => e.id === id);
  //   if (index) {
  //     usersData.splice(index, 1);
  //     return of("Sucessfully Deleted")
  //   }
  //   return of("Invalid ID")
  // }



}
let usersData: UsersData[] = [];

export interface UsersData {


  id?: string;
  name: string;
  email: string;
  phoneno: string;
}
  





// private readonly stops Subject: BehaviorSubject<stopResponse[]>=new BehaviorSubject([]);
// this.stopsubject.next(stop)




//   addUser(user: any): Observable<string> {
//     user.id = makeid()
//     usersData.push(user);
//     return of("Sucessfully Added")
//   }

//   editUser(user: UsersData): Observable<string> {
//     if (usersData.find(e => e.id === user.id)) {
//       usersData.find(e => e.id === user.id)!.email = user.email;[]
//       usersData.find(e => e.id === user.id)!.name = user.name;
//       usersData.find(e => e.id === user.id)!.phoneno = user.phoneno;
//       return of("Sucessfully Updated")
//     }
//     return of("Inavlid ID")
//   }

  // fetchUser(id?: string): Observable<UsersData | UsersData[] | undefined> {
  //   if (id)
  //     return of(usersData.find(e => e.id === id));
  //   else
  //     return of(usersData)
  // }

//   deleteUser(id: string): Observable<string> {
//     let index = usersData.findIndex(e => e.id === id);
//     if (index) {
//       usersData.splice(index, 1);
//       return of("Sucessfully Deleted")
//     }
//     return of("Invalid ID")
//   }

// }



function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;

}

// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {
//   private subject = new Subject<string>();
//   constructor() { }

//   accountuser(message: string) {
//     this.subject.next(message)
//   }

//   profileusers(): Observable<string> {
//     return this.subject.asObservable();
//   }
//   add() {

//   }
//   update() {

//   }
//   delete() {

//   }
//   read() {

//   }
// }

// export interface userdata {
//   id?: number;
//   name: string;
//   email: string;
//   phoneno: string
// }










// export class MessageService {
//   message(value: any) {
//     throw new Error('Method not implemented.');
//   }
//   url = "https://jsonplaceholder.typicode.com/users "



//   // call() {
//   //   throw new Error('Method not implemented.');
//   // }
  
  
//   // private subject = new Subject<string>();
//   private subject = new BehaviorSubject<any>("hello");

//   constructor(private http:HttpClient) { }

//   call()
//   {
//     return this.http.get(this.url);
//   }



// sendMessage(message:string){
//   this.subject.next(message)
//   // this.subject.next(message)

// }
// receivedMessage():Observable<string>{
// return this.subject.asObservable();
// }

// }