import {
  AfterViewInit,
  ElementRef,
  Injectable,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  scheduleData: Array<any> = [];

  _dataBySite: Map<string, Map<string, any>> = new Map();

  _dates: Array<Date> = [];

  _dateRange: DateRange = {
    earliest: new Date(),
    latest: new Date(),
  };

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>('assets/sample.json').subscribe((data) => {
      this.scheduleData = data;
      this._dataBySite = data.reduce((acc, cur) => {
        if (!acc[cur.site]) {
          acc[cur.site] = [];
        }
        if (!acc[cur.site][cur.type]) {
          acc[cur.site][cur.type] = [];
        }
        let start = new Date(cur.start);
        let stop = new Date(start);
        stop.setSeconds(stop.getSeconds() + cur.duration);
        acc[cur.site][cur.type].push({
          mission: cur.msn,
          start,
          stop,
          duration: cur.duration,
        });
        this._dates = [...this._dates, start, stop];
        return acc;
      }, {});
      this._dateRange.earliest = this._dates.reduce((a, b) => (a < b ? a : b));
      this._dateRange.latest = this._dates.reduce((a, b) => (a > b ? a : b));
    });
  }

  get dataBySite() {
    return this._dataBySite;
  }

  get dateRange() {
    return this._dateRange;
  }

  get earliestDate() {
    return this._dateRange.earliest;
  }

  get latestDate() {
    return this._dateRange.latest;
  }

  get totalSeconds() {
    return (
      this._dateRange.latest!.getTime() - this._dateRange.earliest!.getTime()
    );
  }

  calcLeft(startDate: Date) {
    return (
      ((startDate.getTime() - this._dateRange.earliest!.getTime()) /
        1000 /
        (86400 * 7)) *
      100
    );
  }

  calcWidth(startDate: Date, stopDate: Date) {
    return (
      ((stopDate.getTime() - startDate.getTime()) / 1000 / (86400 * 7)) * 100
    );
  }
}

export interface DateRange {
  earliest?: Date;
  latest?: Date;
}
