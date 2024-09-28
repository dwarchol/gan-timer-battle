import { Component, OnInit } from '@angular/core';
import { Alg } from 'cubing/alg'
import { randomScrambleForEvent } from 'cubing/scramble' 
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
export class AppComponent implements OnInit{
  title = 'gan-timer-battle';
  scramble = "";
  points1 = 0;
  points2 = 0;
  time1 = ZERO_TIME;
  time2 = ZERO_TIME;
  scrambleEvent = "333";

  setTime1(time: GanTimerTime){
    console.log("Cuber 1: " + time)
    this.time1 = time;
    if(this.time2 != ZERO_TIME){
      if(this.time1 < this.time2)
        this.points1++;
      if(this.time1 > this.time2)
        this.points2++;
      this.time1 = ZERO_TIME;
      this.time2 = ZERO_TIME;
      this.generateAlg()
    }
  }
  setTime2(time: GanTimerTime){
    console.log("Cuber 2: " + time)
    this.time2 = time;
    if(this.time1 != ZERO_TIME){
      if(this.time1 < this.time2)
        this.points1++;
      if(this.time1 > this.time2)
        this.points2++;
      this.time1 = ZERO_TIME;
      this.time2 = ZERO_TIME;
      this.generateAlg();
    }
  }
  setEvent(eventName: string){
    this.scrambleEvent = eventName;
    this.generateAlg();
  }
  ngOnInit(){
    this.generateAlg();
  }
  async generateAlg(){
    await randomScrambleForEvent(this.scrambleEvent).then((scr) => this.scramble = scr.toString())
    console.log(this.scramble);
  }
}
