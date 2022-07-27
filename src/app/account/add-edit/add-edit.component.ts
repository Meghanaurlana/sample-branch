import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  addeditform = new FormGroup({});



  constructor(private fb: FormBuilder, private router: Router) {
    this.addeditform = fb.group({})
  }
  ngOnInit() {

    this.addeditform = this.fb.group({
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

  onSubmit(): void {
    this.addeditform.markAllAsTouched();
    if (this.addeditform.valid) {
      this.router.navigateByUrl('/profile');
    }



  }

}