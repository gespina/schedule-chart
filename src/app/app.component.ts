import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'schedule-chart';

  @ViewChild('viewport')
  viewport: ElementRef;

  days = [...Array(7).keys()].map((i) => i + 1);
  daySelected: number = 1;

  constructor(public service: ScheduleService) {}

  ngAfterViewInit() {
    // let width = this.viewport.nativeElement.offsetWidth;
    // console.log('Espina: ' + this.viewport.nativeElement.offsetWidth);
  }
}
