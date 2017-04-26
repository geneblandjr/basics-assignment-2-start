import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    allowNewUser = false;
    userName = '';
    welcomeMessage = 'I don\'t know you...add yourself';

  constructor() {
  }

  ngOnInit() {
  }
    OnUserNameChange(event: Event) {
        // this.userName = (<HTMLInputElement>event.target).value;
        console.log(this.allowNewUser);
        if (this.userName !== '') {
            this.allowNewUser = true;
            console.log(this.allowNewUser);
        } else {
            this.allowNewUser = false;
        }
    }
    onCreateUser() {
        this.welcomeMessage = this.userName + ' is a wonder influence on the world';
        this.userName = '';
        this.allowNewUser = false;
    }
}
