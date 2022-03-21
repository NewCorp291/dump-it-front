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
        { title: 'Carton', daysOfWeek: ['1', '6'], startTime: '09:00:00',endTime: '19:30:00', color: 'orange' },
        { title: 'Tout-venant', daysOfWeek: ['2', '4'],  startTime: '07:00:00',endTime: '21:00:00', color: 'purple' },
        { title: 'Verre', daysOfWeek: ['3'],  startTime: '14:00:00',endTime: '18:00:00', color: 'red' },        
      ],
    
  };
}