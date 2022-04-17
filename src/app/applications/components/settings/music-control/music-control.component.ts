import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicControlComponent {

}
