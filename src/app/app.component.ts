import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-project';
  time: number = 0;

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.time = value;
      },
      (error) => {
        console.log('Error :', error);
      },
      () => {
        console.log('Observable Complete');
      }
    )
  }
}
