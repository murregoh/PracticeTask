import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  template: `
    <h1>Hello from {{ users | json }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  public users: any[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    let users = this.userService
      .getUsers()
      .subscribe((val) => (this.users = val));
    console.log(users);
  }
}

bootstrapApplication(App);
