import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() public parentdata: any;
@Output() public childdata= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  child(){
this.childdata.emit("This is from child");
  }

}
