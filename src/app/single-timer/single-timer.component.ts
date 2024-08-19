
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { debounceTime, fromEvent, interval, merge, tap, Subscription } from 'rxjs';

import {
    connectGanTimer,
    makeTimeFromTimestamp,
    GanTimerConnection,
    GanTimerEvent,
    GanTimerState,
    GanTimerTime
} from 'gan-web-bluetooth';

const ZERO_TIME: GanTimerTime = makeTimeFromTimestamp(0);

const now: () => number =
    typeof window.performance?.now == 'function' ?
        () => Math.floor(window.performance.now()) :
        () => Date.now();

const LCD_COLOR = 'white';
const LCD_COLOR_HANDS_ON = 'red';
const LCD_COLOR_GET_SET = 'lime';

@Component({
  selector: 'app-single-timer',
  templateUrl: './single-timer.component.html',
  styleUrl: './single-timer.component.css'
})
export class SingleTimerComponent implements OnInit {
  @Input() cuber = 0;
  @Input() points: number = 0;
  @Output() sendTime = new EventEmitter<GanTimerTime>();
  lcdColor: string = LCD_COLOR;
  lcdTime: GanTimerTime = ZERO_TIME;
  confirmed_time: GanTimerTime = ZERO_TIME;
  timeAsTimeStamp = 0;
  isPlusTwo = false;
  isDnf = false;

  timerConn?: GanTimerConnection;
  localTimerSub?: Subscription;

  hideControls: boolean = false;

  addPoint(){
    this.points++;
  }
  removePoint(){
    this.points--;
  }
  ok(){
    this.isPlusTwo = false;
    this.isDnf = false;
  }
  plusTwo(){
    this.isPlusTwo = true;
    this.isDnf = false;
  }
  dnf(){
    this.isDnf = true;
    this.isPlusTwo = false;
  }
  ngOnInit(): void {
      // hide control buttons if mouse doesn't move for 5sec
      merge(
          fromEvent(document, "touchstart"),
          fromEvent(document, "mousemove")
      ).pipe(
          tap(() => this.hideControls = false),
          debounceTime(5000)
      ).subscribe(() => this.hideControls = true);
  }

  onEnterFullscreen() {
      document.documentElement.requestFullscreen();
  }

  onExitFullscreen() {
      document.exitFullscreen();
  }

  stopLocalTimer() {
      this.localTimerSub?.unsubscribe();
      this.localTimerSub = undefined;
  }

  startLocalTimer() {
      var startTime = now();
      this.lcdTime = ZERO_TIME;
      this.localTimerSub = interval(90).subscribe(() => {
          this.lcdTime = makeTimeFromTimestamp(now() - startTime);
      });
  }
  async onConnectTimer() {
      this.timerConn = await connectGanTimer();
      this.lcdColor = LCD_COLOR;

      this.timerConn.events$.subscribe((evt: GanTimerEvent) => {
          switch (evt.state) {
              case GanTimerState.HANDS_ON:
                  this.lcdColor = LCD_COLOR_HANDS_ON;
                  break;
              case GanTimerState.HANDS_OFF:
                  this.lcdColor = LCD_COLOR;
                  break;
              case GanTimerState.GET_SET:
                  this.lcdColor = LCD_COLOR_GET_SET;
                  break;
              case GanTimerState.IDLE:
                  this.lcdColor = LCD_COLOR;
                  this.confirmTime();
                  this.lcdTime = ZERO_TIME;
                  console.log("reset")
                  break;
              case GanTimerState.RUNNING:
                  this.lcdColor = LCD_COLOR;
                  this.startLocalTimer();
                  this.confirmed_time = ZERO_TIME;
                  break;
              case GanTimerState.STOPPED:
                  this.stopLocalTimer();
                  this.lcdTime = evt.recordedTime!;
                  this.timeAsTimeStamp = this.lcdTime.asTimestamp;
                  
                  break;
              case GanTimerState.DISCONNECT:
                  this.lcdColor = LCD_COLOR;
                  this.lcdTime = ZERO_TIME;
                  this.timerConn = undefined;
                  break;
          }
      });

  }

  onDisconnectTimer() {
      this.timerConn?.disconnect();
      this.timerConn = undefined;
      this.lcdTime = ZERO_TIME;
      this.lcdColor = LCD_COLOR;
  }
  
  confirmTime(){
    if(this.isPlusTwo){
        this.confirmed_time = makeTimeFromTimestamp(this.timeAsTimeStamp + 2000);
    }
    else if(this.isDnf){
        this.confirmed_time = makeTimeFromTimestamp(599999);
    }
    else{
        this.confirmed_time = makeTimeFromTimestamp(this.timeAsTimeStamp);
    } 
    this.sendTime.emit(this.confirmed_time);
    this.ok()
  }
}
