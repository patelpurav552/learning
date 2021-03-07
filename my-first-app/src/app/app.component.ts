import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = '';
  enableUsername: boolean = false;

  onClick() {
    this.enableUsername = true;
    //this.username = "";
  }
}
