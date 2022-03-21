import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'daygridMonth'
  };

  constructor() { }

  ngOnInit(): void {
  }

}