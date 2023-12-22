import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem, TooltipOptions } from 'primeng/api';

import { Subject, takeUntil } from 'rxjs';
import { LAUNCHPAD } from 'src/app/shared/config/applications';
import { dockItems } from 'src/app/shared/config/dock-items';
import { Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DockComponent implements OnInit {

  @Output() launchpadOpened = new EventEmitter();

  onDestroy$ = new Subject();
  dockItems: MenuItem[] = [];

  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000
  };

  constructor(
    private cd: ChangeDetectorRef,
    private store: Store
  ) {}

  ngOnInit() {
    this.dockItems = this.getDockItems();
    this.store.trashItemsCount$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(count => this.updateTrashIcon(count))
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  getDockItems() {
    return dockItems.map(dockItem => {
      return {
        label: dockItem,
        icon: dockItem,
        tooltipOptions: {
          tooltipLabel: dockItem,
          ...this.defaultTooltipOptions
        },
        command: () => {
          if (dockItem === LAUNCHPAD) {
            return this.launchpadOpened.emit();
          }

          this.store.setActiveApplication(dockItem);
        }
      };
    });
  }

  updateTrashIcon(trashItemsCount: number) {
    this.dockItems = this.dockItems
      .map(dockItem => {
        const icon = trashItemsCount > 0 && dockItem.label === 'trash'
          ? 'trash-full'
          : dockItem.icon;

        return {
          ...dockItem,
          icon
        };
      });
    this.cd.markForCheck();
  }

}
