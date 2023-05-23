import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { MESSAGES_COMPONENTS } from './constants/components.constants';
import { MessagesListService } from './services/messages-list.service';





@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    ... MESSAGES_COMPONENTS
   ],
  exports: [...MESSAGES_COMPONENTS],
  providers: [MessagesListService]
})
export class MessageListModule { }
