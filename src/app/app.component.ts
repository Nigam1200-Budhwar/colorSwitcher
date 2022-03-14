import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-change-color';
  message:string;
  messageFunction(data) {
    console.warn(data)
    this.message = data.name;
  }
}
