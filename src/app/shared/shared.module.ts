import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from '../shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../shared/dialogs/error-dialog/error-dialog.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MaterialModule,
    FlexLayoutModule,
    // SuccessDialogComponent,
    // ErrorDialogComponent,
  ],
  entryComponents:[
    // SuccessDialogComponent,
    // ErrorDialogComponent
  ],
  exports: [
    // MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
