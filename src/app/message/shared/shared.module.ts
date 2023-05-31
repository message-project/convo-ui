import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'





@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule
]
})
export class SharedModule { }
