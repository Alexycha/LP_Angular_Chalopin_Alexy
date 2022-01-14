import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../services/actor/actor.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
  actor: any = null;
  change: boolean = false;

  constructor(
    private Actor: ActorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Actor.get(id).subscribe((value: any) => {
      console.log(value)
      this.actor = value;
    });
  }

}
