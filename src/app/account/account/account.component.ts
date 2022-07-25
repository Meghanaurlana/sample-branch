import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountform =  new FormGroup({});
  constructor(private fb: FormBuilder) {
  this.accountform = fb.group({})
  }
  ngOnInit(): void {

    this.accountform = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,

      ]),    
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
          confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    })
  }
  onSubmit(){
  
    this.accountform.markAllAsTouched()
     }


    //  view(){
    //   // console.log("hello")
    //   console.log(this.accountform.value)
    //  }
} 
