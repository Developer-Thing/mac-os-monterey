import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Store } from '../../store/store';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent {

  @Input() target: any;

  items: MenuItem[] = [
    {
      label: 'New Folder',
      command: () => this.store.addNewFolder()
    },
    {
      label: 'Get Info'
    },
    {
      label: 'Change Desktop Background...'
    },
    {
      label: 'Use Stacks'
    },
    {
      label: 'Show View Options'
    },
  ]

  constructor(private store: Store) { }

}
