import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { filter, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { DESKTOP, SPOTLIGHT } from 'src/app/shared/config/applications';
import { WindowService } from 'src/app/shared/services/window.service';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject();
  folders$ = this.store.desktopFolders$;
  launchPadOpened = false;

  constructor(
    private windowService: WindowService,
    private store: Store
  ) { }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  ngOnInit() {
    this.store.activeApplication$
      .pipe(
        tap(app => console.log(app)),
        takeUntil(this.onDestroy$),
        filter(app => app !== DESKTOP),
        mergeMap(app => this.windowService.open(app))
      )
      .subscribe(app => this.store.setActiveApplication(app))
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {

    if (event.ctrlKey && event.code === 'Space') {
      return this.openSpotlight();
    }

    if (event.ctrlKey && event.code === 'Backspace') {
      this.store.deleteSelectedFolders();
    }
  }

  openSpotlight() {
    return this.store.setActiveApplication(SPOTLIGHT);
  }

  unselectFolders() {
    this.store.unselectAllFolders();
  }

}
