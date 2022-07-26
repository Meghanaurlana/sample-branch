import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  addeditform = new FormGroup({});



  constructor(private fb: FormBuilder, private router: Router, private accountservice:AccountService) {
    this.addeditform = fb.group({})
  }
  ngOnInit() {

    this.addeditform = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
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

  onSubmit(){
    this.addeditform.markAllAsTouched();
    if (this.addeditform.valid) {
      // this.accountservice.addUser(this.addeditform.value)
      this.accountservice.users.push(this.addeditform.value)
      // console.log( this.accountservice.users);
      this.accountservice.addUser(this.accountservice.users)
      // console.log( this.accountservice.users);
    
      this.router.navigateByUrl('/profile');
    }



  }

}