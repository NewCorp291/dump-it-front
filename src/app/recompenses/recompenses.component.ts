import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recompenses',
  templateUrl: './recompenses.component.html',
  styleUrls: ['./recompenses.component.scss']
})
export class RecompensesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/first.jpg', '../../assets/second.jpg', '../../assets/third.jpg'];
}
