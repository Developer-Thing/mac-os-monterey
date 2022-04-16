import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './containers';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: DesktopComponent
    }
  ])],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
