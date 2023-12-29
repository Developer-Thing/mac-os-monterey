import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MyStore } from 'src/app/shared/store/my-store';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrashComponent {
  myStore = inject(MyStore);

  folders = this.myStore.trashFolders;

  constructor() {}
}
