import { Injectable } from "@angular/core";
import { DialogService, DynamicDialogConfig } from "primeng/dynamicdialog";
import { Observable, throwError } from "rxjs";
import * as apps from './../config/applications';
import * as appComponents from './../../applications/containers';

@Injectable({ providedIn: 'root' })
export class WindowService {

  constructor(private dialogService: DialogService) {}

  open(activeApplication: string): Observable<any> {
    const component = this.findComponentByApplicationId(activeApplication);

    if (component) {
      const dialogConfig: DynamicDialogConfig = {
        showHeader: false,
        width: '50%',
        styleClass: activeApplication
      };

      return this.dialogService.open(component, dialogConfig).onClose;
    }

    return throwError(() => 'Could not find component to display');
  }

  private findComponentByApplicationId(applicationId: string) {
    switch (applicationId) {
      case apps.TERMINAL: return appComponents.TerminalComponent;
      case apps.FINDER: return appComponents.FinderComponent;
      case apps.TRASH: return appComponents.TrashComponent;
      case apps.SPOTLIGHT: return appComponents.SpotlightComponent;

      default: return null;
    }
  }

}