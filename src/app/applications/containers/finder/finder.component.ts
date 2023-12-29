import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MyStore } from 'src/app/shared/store/my-store';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinderComponent {
  myStore = inject(MyStore);

  folders = this.myStore.tutorialFolders;
}
