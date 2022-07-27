import { JsonPipe } from '@angular/common';
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



  constructor(private fb: FormBuilder, private router: Router, private service: AccountService) {
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
      this.router.navigateByUrl('/profile');
    }


  }




}



