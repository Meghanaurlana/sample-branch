import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  product: Product[] = [];


  constructor(private router: Router, private service:AccountService) { }

  ngOnInit() {

    this.product = tableData

  }


  accountdel(x: number) {
    this.product.splice(x, 1);
  }

  add() {
    this.router.navigateByUrl('/addedit')
  }

}


export interface Product {
  Name?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  DateCreated?: string;
  PincodeAddress?: string;
}
const tableData = [
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001893",
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001894"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "12 Feb 2021",
    "PincodeAddress": "0001895"
  },
  {
    "Name": "James K",
    "EmailAddress": "jamesk123@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "22 Nov 2020",
    "PincodeAddress": "0001896"
  },
  {
    "Name": "Peter Hathway",
    "EmailAddress": "hathway@outlook.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001896"
  }
]
