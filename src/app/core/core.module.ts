import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [PageNotfoundComponent],
  exports: []
})
export class CoreModule { }
