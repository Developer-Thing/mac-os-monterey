import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent {

  public $time: Observable<Date> = timer(0, 1000)
    .pipe(map(() => new Date()));

}
