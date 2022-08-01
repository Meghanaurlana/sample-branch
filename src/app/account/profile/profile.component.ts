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
  constructor(private router: Router, private accountservice: AccountService) { }

  ngOnInit() {

    this.accountservice.fetchUser().subscribe(e => {
      this.users = e as UsersData[];

    
    })

    // this.product = tableData
    // this.accountservice.profileusers().subscribe((d) => {
    //   this.message = d;

    // })
  }


  accountdel(x: number) {
    this.users.splice(x, 1);
  }

  add() {
    this.accountservice.fetchUser().subscribe(e => {
      this.users = e as UsersData[];

    this.router.navigateByUrl('/addedit')
  })

}

}
