import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  actors!: any;
  constructor(
    private Actor: ActorService
  ) { }

  ngOnInit(): void {
    this.Actor.getAllActors().subscribe((data: any) => {
      this.actors = data;
    });
  }
}
