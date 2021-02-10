import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FirebaseService } from '../Service/firebaseService/firebase.service';
import { UserDataServiceService } from '../Service/UserDataService/user-data-service.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit, AfterContentInit {
  constructor(
    private userData: UserDataServiceService,
    private firebase: FirebaseService
  ) {}
  ngAfterContentInit(): void {
    this.firebase.getData().subscribe((res) => {
      console.log(res);
      this.chats = res;
    });

  }
  user;
  message = '';
  chats = [];

  ngOnInit() {
    this.user = this.userData.getUserData();

  }
  submit() {
    const data = {
      name: this.user,
      message: this.message,
      Date: new Date(),
    };
    this.chats.push(data);
    this.firebase
      .addData(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
