import { Component } from '@angular/core';
import { Alg } from 'cubing/alg'
import { randomScrambleForEvent } from 'cubing/scramble'
@Component({
  selector: 'app-scramble-view',
  templateUrl: './scramble-view.component.html',
  styleUrl: './scramble-view.component.css'
})
export class ScrambleViewComponent {
  scrambleText: string = "";
  isStarted: boolean = false;
  start(){
    this.isStarted = true;
    this.generateAlg();
  }
  async generateAlg(){
    await randomScrambleForEvent("333bf").then((scr) => this.scrambleText = scr.toString())
    console.log(this.scrambleText)
  }
  click() {
    console.log("spacebvar")
}
}
 