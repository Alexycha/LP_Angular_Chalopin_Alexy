import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor.model';
import { ActorService } from '../services/actor/actor.service';

@Component({
  selector: 'app-actor-new',
  templateUrl: './actor-new.component.html',
  styleUrls: ['./actor-new.component.scss']
})
export class ActorNewComponent implements OnInit {

  public actor!: Actor;

  constructor(
    private Actor: ActorService
  ) { }

  ngOnInit(): void {
    this.actor = new Actor();
  }

  add() {
    this.Actor.saveNewActors(this.actor).subscribe(() => {
      this.actor = new Actor();
    });
  }

}
