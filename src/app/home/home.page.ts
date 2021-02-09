import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServiceService } from '../Service/UserDataService/user-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  UserName = '';
  constructor(
    private userData: UserDataServiceService,
    private Router: Router
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    this.userData.setUserData(this.UserName);
    this.Router.navigate(['/chat-room'], { replaceUrl: true });
  }
}
