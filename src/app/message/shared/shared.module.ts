import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MatTabsModule } from '@angular/material/tabs'



@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule
]
})
export class SharedModule { }
