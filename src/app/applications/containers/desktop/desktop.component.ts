import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  effect,
  inject,
} from '@angular/core';
import { filter, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { DESKTOP, SPOTLIGHT } from 'src/app/shared/config/applications';
import { WindowService } from 'src/app/shared/services/window.service';
import { MyStore } from 'src/app/shared/store/my-store';

@Component({
    selector: 'app-desktop',
    templateUrl: './desktop.component.html',
    styleUrls: ['./desktop.component.scss'],
    standalone: false
})
export class DesktopComponent {
  myStore = inject(MyStore);

  folders = this.myStore.desktopFolders;
  launchPadOpened = false;

  constructor(private windowService: WindowService) {
    effect(() => {
      const app = this.myStore.activeApplication();
      if (app !== DESKTOP) {
        this.windowService
          .open(app)
          .subscribe(app => this.myStore.setActiveApplication(app));
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.code === 'Space') {
      return this.openSpotlight();
    }

    if (event.ctrlKey && event.code === 'Backspace') {
      this.myStore.deleteSelectedFolders();
    }
  }

  openSpotlight() {
    return this.myStore.setActiveApplication(SPOTLIGHT);
  }

  unselectFolders() {
    this.myStore.unselectAllFolders();
  }

  onAddNewFolder() {
    this.myStore.addNewFolder();
  }
}
