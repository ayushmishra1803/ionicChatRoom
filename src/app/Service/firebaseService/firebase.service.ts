import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private store: AngularFirestore) {}
  addData(data) {
    return this.store.collection('messages').add(data);
  }
  getData() {
    return this.store
      .collection('messages', (ref) => ref.orderBy('Date', 'asc'))
      .valueChanges();
  }
}
