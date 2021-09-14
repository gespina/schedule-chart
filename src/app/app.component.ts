import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { ScheduleService } from './schedule.service';
import { map, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'schedule-chart';

  days = [...Array(7).keys()].map((i) => i + 1);
  daySelected: number = 1;

  dates = [...Array(7).keys()].map((i) => {
    let _d = this.service.dateRange.earliest;
    _d.setDate(_d.getDate() + i);
    return _d;
  });

  constructor(public service: ScheduleService) {}

  ngAfterViewInit() {}
}
