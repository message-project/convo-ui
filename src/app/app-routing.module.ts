import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'message', component: MessageComponent},
  { path: 'message-list', component: MessageListComponent},
  { path: '**', redirectTo: 'message'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
