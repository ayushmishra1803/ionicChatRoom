import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private storage:Storage) { }
  UserData;
  setUserData(data){
    this.UserData=data
    this.storage.set('userData',data).then(stored=>{
      console.log(stored);

    }).catch(err=>{
      console.log(err);

    })
  }
}
