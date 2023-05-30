import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageListModule } from "./message-list/message-list.module";
import { AgGridModule } from 'ag-grid-angular';
import { MessageListEffects } from './+state/effects/message-list.effects';
import { StoreModule } from '@ngrx/store';
import * as fromMessages from '../message/+state/message.reducer'

@NgModule({
    declarations: [MessageComponent, MessageListComponent],
    imports: [
        CommonModule,
        SharedModule,
        AgGridModule,
        EffectsModule.forFeature([
            MessageListEffects
        ]),
        MessageListModule,
        StoreModule.forFeature(fromMessages.MESSAGES_FEATURE_KEY, fromMessages.reducer)
    ]
})
export class MessageModule {}
