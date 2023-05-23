import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageListModule } from "./message-list/message-list.module";

@NgModule({
    declarations: [MessageComponent, MessageListComponent],
    imports: [
        CommonModule,
        SharedModule,
        EffectsModule.forFeature([]),
        MessageListModule
    ]
})
export class MessageModule {}
