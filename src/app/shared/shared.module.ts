import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    ContextMenuComponent,
    FormsModule,
    SharedUiModule
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class SharedModule { }
