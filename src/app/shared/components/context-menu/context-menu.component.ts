import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @Input() target: any;

  @Output() addNewFolder = new EventEmitter();

  items: MenuItem[] = [
    {
      label: 'New Folder',
      command: () => this.addNewFolder.emit(),
    },
    {
      label: 'Get Info',
    },
    {
      label: 'Change Desktop Background...',
    },
    {
      label: 'Use Stacks',
    },
    {
      label: 'Show View Options',
    },
  ];

  constructor() {}
}
