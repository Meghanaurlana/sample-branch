import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountform =  new FormGroup({});


 
  constructor(private fb: FormBuilder, private router:Router) {
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
    phoneno: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      
    })
  }
  onSubmit(){
  
    this.accountform.markAllAsTouched();
    this.router.navigateByUrl('/profile');
     }


    //  view(){
    //   // console.log("hello")
    //   console.log(this.accountform.value)
    //  }
} 
