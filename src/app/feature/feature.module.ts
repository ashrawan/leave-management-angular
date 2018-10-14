import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './dashboard/auth/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [LoginComponent],
  exports: [
    CommonModule,
    LoginComponent
  ],
  providers: [AuthService]
})
export class FeatureModule { }
