import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  myTextVal!: string;
  myTextVal1!: string;
  constructor(private appService: AppService, private router:Router) { }

  ngOnInit(): void {
  }
  sendTextValue() {
    this.appService.passValue(this.myTextVal);
    this.appService.passValue(this.myTextVal1);
    this.router.navigateByUrl('/hello')
  }
}

