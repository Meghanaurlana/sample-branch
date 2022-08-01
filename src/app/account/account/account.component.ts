import { JsonPipe } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { observable } from 'rxjs';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountform = new FormGroup({});
  message: any;


  constructor(private fb: FormBuilder, private router: Router, private accountservice: AccountService) {
    this.accountform = fb.group({})
  }
  ngOnInit() {

    this.accountform = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,

      ]),
      phoneno: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),

    })





  }
  onSubmit() {
    this.accountform.markAllAsTouched();
    if (this.accountform.valid) {
      this.accountservice.addUser(this.accountform.value)
      this.router.navigateByUrl('/profile');
    }

  } 
 

  // accountuser() {
  //   this.accountservice.accountuser(this.accountform.value);

  // }

}



