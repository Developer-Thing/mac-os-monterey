import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TerminalModule } from 'primeng/terminal';
import { ContextMenuModule } from 'primeng/contextmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarModule,
    InputTextModule,
    DockModule,
    MenubarModule,
    SidebarModule,
    TerminalModule,
    ContextMenuModule,
    AutoCompleteModule,
    DialogModule
  ]
})
export class SharedUiModule { }
