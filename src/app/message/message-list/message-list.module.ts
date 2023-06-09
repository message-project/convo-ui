import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { MESSAGES_COMPONENTS } from './constants/components.constants';
import { MessagesListService } from './services/messages-list.service';
import { MessagesListActionsCellRendererComponent } from './components/messages-list-actions-cell-renderer/messages-list-actions-cell-renderer.component';





@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    ... MESSAGES_COMPONENTS,
    MessagesListActionsCellRendererComponent
   ],
  exports: [...MESSAGES_COMPONENTS],
  providers: [MessagesListService]
})
export class MessageListModule { }
