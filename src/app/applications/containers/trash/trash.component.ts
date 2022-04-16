import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrashComponent {

  folders$ = this.store.trashFolders$;

  constructor(private store: Store) {}

}
