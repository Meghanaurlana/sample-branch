import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';

  public children = '';
  public value: string | undefined;

  onclick() {
    this.value = "This is from parent"
  }
}
