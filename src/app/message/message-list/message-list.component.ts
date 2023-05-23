import { Component, OnInit } from '@angular/core';
import { MessagesListService } from './services/messages-list.service';
import { MessagesState } from '../+state/message.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent  implements OnInit{


  constructor(private _messageListService: MessagesListService, private _store: Store<MessagesState>) {}
  ngOnInit(): void {
 
  }


}
