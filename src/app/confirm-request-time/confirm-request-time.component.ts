import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Moment } from 'moment';

@Component({
  selector: 'app-confirm-request-time',
  templateUrl: './confirm-request-time.component.html',
  styleUrls: ['./confirm-request-time.component.scss'],
})
export class ConfirmRequestTimeComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Date;
  minDate: Date;
  maxDate: Date;
  constructor() {}

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    this.minDate = tomorrow;
    this.selectedDate = tomorrow;
    this.maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  }
}
