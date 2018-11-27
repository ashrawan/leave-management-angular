import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { NavnsideWrapperComponent } from './navigation-contents/navnside-wrapper/navnside-wrapper.component';
import { SidebarComponent } from './navigation-contents/sidebar/sidebar.component';
import { TopNavigationComponent } from './navigation-contents/top-navigation/top-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    PageNotfoundComponent,
    NavnsideWrapperComponent,
    SidebarComponent,
    TopNavigationComponent
  ],
  exports: [
    NavnsideWrapperComponent
  ]
})
export class CoreModule { }
