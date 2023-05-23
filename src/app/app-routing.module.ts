import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './message/message-list/message-list.component';

const routes: Routes = [
  { path: 'message-list', component: MessageListComponent},
  { path: '**', redirectTo: 'message-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
