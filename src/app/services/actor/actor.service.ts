import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Actor } from 'src/app/models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private dbPath = '/actors';
  actorsRef: AngularFirestoreCollection<Actor>;

  constructor(
    private db: AngularFirestore
  ) {
    this.actorsRef = db.collection(this.dbPath);
  }

  getAllActors(): any {
    return this.actorsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }

  saveNewActors(actor: Actor): any {
    return new Observable(obs => {
      this.actorsRef.add({ ...actor }).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.actorsRef.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() });
      });
    });
  }

  update(actor: Actor) {
    return new Observable(obs => {
      this.actorsRef.doc(actor.id).update(actor);
      obs.next();
    });
  }

  delete(id: any) {
    this.actorsRef.doc(id).delete();
  }
}
