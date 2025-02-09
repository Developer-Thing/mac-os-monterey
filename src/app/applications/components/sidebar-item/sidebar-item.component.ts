import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidebarItem } from 'src/app/shared/models/sidebar-item';

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrls: ['./sidebar-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SidebarItemComponent {

  @Input() sidebarItem!: SidebarItem;

}
