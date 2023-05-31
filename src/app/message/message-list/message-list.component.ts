import { Component, OnInit } from '@angular/core';
import { MessagesListService } from './services/messages-list.service';
import { MessagesState } from '../+state/message.reducer';
import { Store } from '@ngrx/store';
import { ColDef, ColumnApi, GridApi, GridOptions, GridReadyEvent, RowNode, RowSelectedEvent } from 'ag-grid-community';
import { APPROVED_MESSAGE_LIST_GRID_COL_DEFS, MESSAGE_LIST_GRID_COL_DEFS, PENDING_MESSAGE_LIST_GRID_COL_DEFS } from './constants/message-lis-col-def.constant';
import * as MessagesActions from '../+state/actions'
import { Message, MessageApprovalStatus } from '../shared/models/message.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { getMessagesSelectedTab, getrejectedMessagesCount } from '../+state/selectors';
import { getApprovedMesssages, getApprovedMesssagesStatus, getPendingMesssages, getPendingMesssagesStatus, getRejectedMesssages, getRejectedMesssagesStatus } from '../+state/selectors/messages-list.selector';
import { MESSAGE_GRID_OPTIONS } from './constants/message-grid-options.constant';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  #gridColumnsApi!: ColumnApi
  #gridApi!: GridApi
  public columnDefs: ColDef[] = MESSAGE_LIST_GRID_COL_DEFS
  public gridOptions: GridOptions = MESSAGE_GRID_OPTIONS
  public rowData: Message[] = []
  #destroy: Subject<void> = new Subject<void>();
  messageSelectedTab!: MessageApprovalStatus

  public status?: Observable<boolean>

  constructor(private _messageListService: MessagesListService, private _store: Store<MessagesState>) { }
  ngOnInit(): void {

  }

  public onRowSelected(event: RowSelectedEvent): void {
    const selectedMessages = event.api.getSelectedNodes().map((node: RowNode | any) => node.data)
    this._store.dispatch(MessagesActions.updateSelectedMessagesList({ selectedMessages }))
  }

  public onGridReady(event: GridReadyEvent): void {
    this.#gridColumnsApi = event.columnApi;
    this.#gridApi = event.api;
    this._store.select(getMessagesSelectedTab).pipe(takeUntil(this.#destroy)).subscribe((
      messagesSelectedTab: MessageApprovalStatus
    ) => {
      this.messageSelectedTab = messagesSelectedTab
      this.#prepareGrid(messagesSelectedTab)
      this.#gridApi.deselectAll()
      this._store.dispatch(
        MessagesActions.updateSelectedMessagesList({ selectedMessages: [] })
      )
    })
    this.#gridApi.sizeColumnsToFit()
  }

  #getColDefCopy(colDefs: ColDef[]): ColDef[] {
    return colDefs.map((colDef: ColDef) => {
      return {
        ...colDef
      }
    })
  }

  #prepareGrid(messagesApprovedStatus: MessageApprovalStatus): void {
    let colDefs: ColDef[];
    let dataSource: Observable<Message[]>;

    switch (messagesApprovedStatus) {
      case MessageApprovalStatus.APPROVED:
        this._store.dispatch(MessagesActions.loadApprovedMessages({ messagesApprovedStatus }));
        colDefs = this.#getColDefCopy(APPROVED_MESSAGE_LIST_GRID_COL_DEFS)
        dataSource = this._store.select(getApprovedMesssages)
        this.status = this._store.select(getApprovedMesssagesStatus);
        break;

      case MessageApprovalStatus.PENDING:
        this._store.dispatch(MessagesActions.loadPendingMessages({ messagesApprovedStatus }));
        colDefs = this.#getColDefCopy(PENDING_MESSAGE_LIST_GRID_COL_DEFS)
        dataSource = this._store.select(getPendingMesssages)
        this.status = this._store.select(getPendingMesssagesStatus);
        break;

      case MessageApprovalStatus.REJECTED:
        this._store.dispatch(MessagesActions.loadRejectedMessages({ messagesApprovedStatus }));
        colDefs = this.#getColDefCopy(APPROVED_MESSAGE_LIST_GRID_COL_DEFS)
        dataSource = this._store.select(getRejectedMesssages)
        this.status = this._store.select(getRejectedMesssagesStatus);
        break;
    }

    dataSource
      .pipe(takeUntil(this.#destroy))
      .subscribe((messages: Message[]) => {
        this.rowData = messages
      })

    this.#gridApi.setColumnDefs([])
    this.#gridApi.setColumnDefs(colDefs)
  }




}
