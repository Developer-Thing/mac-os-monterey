import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';

import {
  DesktopComponent,
  LaunchpadComponent,
  TerminalComponent,
  FoldersComponent,
  FinderComponent,
  TrashComponent,
  SpotlightComponent
} from './containers';

import {
  DockComponent,
  MenuComponent,
  DialogControlsComponent,
  FolderIconComponent,
  FinderSidebarComponent,
  SidebarGroupComponent,
  SidebarItemComponent
} from './components';
import { SharedModule } from '../shared/shared.module';
import { SettingsModule } from './components/settings/settings.module';
import { ClockComponent } from '../shared/components/clock/clock.component';

const components = [
  DesktopComponent,
  LaunchpadComponent,
  DockComponent,
  MenuComponent,
  TerminalComponent,
  DialogControlsComponent,
  FoldersComponent,
  FolderIconComponent,
  FinderComponent,
  TrashComponent,
  FinderSidebarComponent,
  SidebarGroupComponent,
  SidebarItemComponent,
  SpotlightComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule,
    SettingsModule,
    ClockComponent
  ]
})
export class ApplicationsModule { }
