import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule,
  MatMenuModule, MatToolbarModule, MatTabsModule, MatCardModule, MatTableModule, MatSlideToggleModule,
  MatRadioModule, MatExpansionModule, MatProgressBarModule, MatListModule, MatButtonToggleModule,
  MatProgressSpinnerModule, 
  MatDialogModule} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatTableModule,
  MatCardModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatListModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules],
  declarations: []
})
export class MaterialModule { }
