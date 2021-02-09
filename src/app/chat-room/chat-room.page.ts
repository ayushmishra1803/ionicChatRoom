import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {
  constructor() {}
  user = 'Ayush';
  chats = [
    { name: 'Ayush', message: 'Hello KHushboo', time: 1612898487 },
    { name: 'KHushboo', message: 'Hello Ayush', time: 1612898488 },
     { name: 'KHushboo', message: 'Hello Ayush', time: 1612898488 },
  ];

  ngOnInit() {}
}
