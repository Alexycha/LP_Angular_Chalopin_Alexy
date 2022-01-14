import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../services/actor/actor.service';

@Component({
  selector: 'app-actor-modif',
  templateUrl: './actor-modif.component.html',
  styleUrls: ['./actor-modif.component.scss']
})
export class ActorModifComponent implements OnInit {
  actor: any = null;
  change: boolean = false;

  constructor(
    private Actor: ActorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Actor.get(id).subscribe((value: any) => {
      console.log(value)
      this.actor = value;
    });
  }

  modif() {
    this.Actor.update(this.actor).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
