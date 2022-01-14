import { Component, OnInit, Input } from '@angular/core';
import { ActorService } from '../services/actor/actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  @Input() actorName?: string;
  @Input() actorOnAir?: boolean;
  @Input() actorAffiche?: string;
  @Input() actorfirstName?: string;
  @Input() actorBorn?: string;
  @Input() actorDeath?: string;
  @Input() actorNationality?: string;
  @Input() actorBestMovie?: string;
  @Input() actorPicture?: string;
  @Input() actorResume?: string;
  @Input() actorTime?: string;
  @Input() id?: string;

  constructor(
    private Actor: ActorService
  ) { }

  ngOnInit(): void {
  }

  getOnAir() {
    return this.actorOnAir;
  }

  onWatchActor() {
    console.log('Je regarde le Film');
  }

  changeColor() {
    return this.actorOnAir ? 'purple' : 'red';
  }

  onSwitch() {
    // this.Film.switchOnAir(this.index);
  }

  suppr(): void {
    this.Actor.delete(this.id);
  }

}
