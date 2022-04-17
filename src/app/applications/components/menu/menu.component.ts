import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Output() spotlightOpened = new EventEmitter();

  isSettingsDialogDisplayed = false;

  menuItems = [
    {
      label: 'Finder',
    },
    {
      label: 'File'
    },
    {
      label: 'Edit'
    },
    {
      label: 'View'
    },
    {
      label: 'Go'
    },
    {
      label: 'Window'
    },
    {
      label: 'Help'
    }
  ];

  openSpotlight() {
    this.spotlightOpened.emit();
  }

  toggleSettingsDialog() {
    this.isSettingsDialogDisplayed = !this.isSettingsDialogDisplayed;
  }

}
