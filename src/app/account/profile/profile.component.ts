import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, UsersData } from '../account.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users: UsersData[] = [];
  message: any;
  user: any;
  constructor(private router: Router, private accountservice: AccountService) { }

  ngOnInit() {

    this.accountservice.fetchUser().subscribe(e => {
      // console.log("e:",e)
      this.user = e as unknown as UsersData[];
    })

    // console.log("Users:",this.user)


    // const  userObservable = this.accountservice.fetchUser();
    // userObservable.subscribe(e => {
    //    this.users =e as UsersData[];

    // })


    // this.accountservice.stringSubject.subscribe(
    //   e=> 
    //   {
    //     console.log('next subscribed value: ' + this.user);
    //     this.users = e as unknown as UsersData[];
    //   }
    // );



    // this.accountservice.fetchUser().subscribe(e => {
    //   this.users = e as UsersData[];
    // })

    // this.product = tableData
    // this.accountservice.profileusers().subscribe((d) => {
    //   this.message = d;

    // })


  }
  accountdel(x:any) {
    this.user.splice(x, 1);
    ;
    
  }

  edit(){
    this.router.navigateByUrl('/addedit')
  }

  add() {
    // this.accountservice.fetchUser().subscribe(e => {
    //   this.users = e as UsersData[];

    this.router.navigateByUrl('/addedit')
    // })

  }

}
