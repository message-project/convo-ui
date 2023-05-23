import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar'



@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule
]
})
export class SharedModule { }
