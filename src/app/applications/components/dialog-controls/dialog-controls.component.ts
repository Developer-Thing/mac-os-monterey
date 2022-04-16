import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-controls',
  templateUrl: './dialog-controls.component.html',
  styleUrls: ['./dialog-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogControlsComponent implements OnInit {

  maximized = false;
  initialWidth?: string;
  initialHeight?: string;

  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.initialWidth = this.dialogConfig.width;
    this.initialHeight = this.dialogConfig.height;
  }

  close() {
    this.dialogRef.close();
  }

  maximize() {
    this.maximized = !this.maximized;
    this.dialogConfig.width = this.maximized ? '100%' : this.initialWidth;
    this.dialogConfig.height = this.maximized ? '100%' : this.initialHeight;
  }

}
