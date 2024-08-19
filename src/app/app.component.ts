import { Component } from '@angular/core';
import {
  makeTimeFromTimestamp,
  GanTimerTime
} from 'gan-web-bluetooth';

const ZERO_TIME: GanTimerTime = makeTimeFromTimestamp(0);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gan-timer-battle';
  points1 = 0;
  points2 = 0;
  time1 = ZERO_TIME;
  time2 = ZERO_TIME;

  setTime1(time: GanTimerTime){
    this.time1 = time;
    if(this.time2 != ZERO_TIME){
      if(this.time1 < this.time2)
        this.points1++;
      if(this.time1 > this.time2)
        this.points2++;
      this.time1 = ZERO_TIME;
      this.time2 = ZERO_TIME;
    }
  }
  setTime2(time: GanTimerTime){
    this.time2 = time;
    if(this.time1 != ZERO_TIME){
      if(this.time1 < this.time2)
        this.points1++;
      if(this.time1 > this.time2)
        this.points2++;
      this.time1 = ZERO_TIME;
      this.time2 = ZERO_TIME;
    }
  }

}
