import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from './core/boot/boot.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: 'boot', component: BootComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'desktop',
    loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule)
  },
  { path: '', redirectTo: '/boot', pathMatch: 'full' },
  { path: '**', redirectTo: '/boot' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
