import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  @Output() setEvent = new EventEmitter<string>();

  onEventClick(eventName: string){
    this.setEvent.emit(eventName)
  }
}
