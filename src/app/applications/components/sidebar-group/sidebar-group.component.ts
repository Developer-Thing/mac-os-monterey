import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidebarGroup } from 'src/app/shared/models/sidebar-group';

@Component({
    selector: 'app-sidebar-group',
    templateUrl: './sidebar-group.component.html',
    styleUrls: ['./sidebar-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SidebarGroupComponent {

  @Input() sidebarGroup!: SidebarGroup;

}
