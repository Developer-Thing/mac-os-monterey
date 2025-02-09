import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  effect,
  inject,
} from '@angular/core';
import { MenuItem, TooltipOptions } from 'primeng/api';

import { Subject, takeUntil } from 'rxjs';
import { LAUNCHPAD } from 'src/app/shared/config/applications';
import { dockItems } from 'src/app/shared/config/dock-items';
import { MyStore } from 'src/app/shared/store/my-store';

@Component({
    selector: 'app-dock',
    templateUrl: './dock.component.html',
    styleUrls: ['./dock.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DockComponent implements OnInit {
  @Output() launchpadOpened = new EventEmitter();

  myStore = inject(MyStore);
  onDestroy$ = new Subject();
  dockItems: MenuItem[] = [];
  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000,
  };

  constructor(private cd: ChangeDetectorRef) {
    effect(() => {
      if (this.dockItems.length) {
        this.updateTrashIcon(this.myStore.trashItemsCount());
      }
    });
  }

  ngOnInit() {
    this.dockItems = this.getDockItems();
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
          ...this.defaultTooltipOptions,
        },
        command: () => {
          if (dockItem === LAUNCHPAD) {
            return this.launchpadOpened.emit();
          }

          this.myStore.setActiveApplication(dockItem);
        },
      };
    });
  }

  updateTrashIcon(trashItemsCount: number) {
    this.dockItems = this.dockItems.map(dockItem => {
      const icon =
        trashItemsCount > 0 && dockItem.label === 'trash'
          ? 'trash-full'
          : dockItem.icon;

      return {
        ...dockItem,
        icon,
      };
    });
    this.cd.markForCheck();
  }
}
