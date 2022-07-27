import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() public parentdata: any;
@Output() public childdata= new EventEmitter()
  message: string | undefined;
  messages:string | undefined
  constructor(private app:AppService) { }

  ngOnInit(): void {
    this.app.newmessage.subscribe(newmessage  =>this.message = newmessage)
    // this.app.newmessages.subscribe(newmessages =>this.message=newmessages)
  }

  child(){
this.childdata.emit("This is from child");
  }

}
