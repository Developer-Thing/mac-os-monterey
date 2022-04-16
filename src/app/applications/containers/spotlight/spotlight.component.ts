import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { dockItems } from 'src/app/shared/config/dock-items';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent {

  results: string[] = [];

  constructor(private dialogRef: DynamicDialogRef) { }

  onSearch(search: any) {
    this.results = dockItems.filter(
      di => di.toLowerCase().startsWith(search.query.toLowerCase()));
  }

  onAppSelected(app: string) {
    this.dialogRef.close(app)
  }

}
