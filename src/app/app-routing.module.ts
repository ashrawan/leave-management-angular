import { LoginComponent } from './feature/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './feature/dashboard/dashboard.module';

const routes: Routes = [
  {path: 'home', loadChildren: './feature/dashboard/dashboard.module#DashboardModule'},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
