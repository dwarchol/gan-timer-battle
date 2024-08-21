import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scramble-view',
  templateUrl: './scramble-view.component.html',
  styleUrl: './scramble-view.component.css'
})
export class ScrambleViewComponent {
  @Input() scramble = '';
}
 