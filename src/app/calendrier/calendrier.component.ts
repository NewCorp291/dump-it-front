import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent {

    calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Carton', date: '2022-03-21' },
        { title: 'Carton', date: '2022-03-28' },
        { title: 'Carton', date: '2022-04-04' },
        { title: 'Carton', date: '2022-04-09' },
        { title: 'Carton', date: '2022-04-11' },
        { title: 'Carton', date: '2022-04-16' },
        { title: 'Carton', date: '2022-04-18' }
      ],
      eventColor: 'yellow',
    };
  }
