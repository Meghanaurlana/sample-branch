import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  name!: string;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.stringSubject.subscribe(
      data => 
      {
        console.log('next subscribed value: ' + data);
        this.name = data;
      }
    );
  }
}

