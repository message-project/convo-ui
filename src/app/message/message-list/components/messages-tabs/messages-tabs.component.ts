import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { MessagesState } from 'src/app/message/+state/message.reducer';
import {
  getApprovedMessagesCount,
  getMessagesSelectedTab,
  getPendingMessagesCount,
  getrejectedMessagesCount,
} from 'src/app/message/+state/selectors';
import { IMessagesListTab } from 'src/app/message/shared/interfaces/messages-list-tabs.interface';
import { MessageApprovalStatus } from 'src/app/message/shared/models/message.model';
import * as MessagesActions from '../../../+state/actions';

@Component({
  selector: 'app-messages-tabs',
  templateUrl: './messages-tabs.component.html',
  styleUrls: ['./messages-tabs.component.scss'],
})
export class MessagesTabsComponent implements OnInit, OnDestroy {
  public tabs: IMessagesListTab[] = [
    {
      status: MessageApprovalStatus.APPROVED,
      selected: false,
      count: this._store.select(getApprovedMessagesCount),
    },
    {
      status: MessageApprovalStatus.PENDING,
      selected: false,
      count: this._store.select(getPendingMessagesCount),
    },
    {
      status: MessageApprovalStatus.REJECTED,
      selected: false,
      count: this._store.select(getrejectedMessagesCount),
    },
  ];

  #destroy: Subject<void> = new Subject<void>();

  constructor(
    private _store: Store<MessagesState>,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._store.dispatch(MessagesActions.loadMessageStats());
    this._store
      .select(getMessagesSelectedTab)
      .pipe(takeUntil(this.#destroy))
      .subscribe((messagesApprovalStatus: MessageApprovalStatus) => {
        this.#prepareTabs(messagesApprovalStatus);
      });
  }

  #prepareTabs(messageApprovalStatus: MessageApprovalStatus) {
    this.tabs.forEach((tab: IMessagesListTab) =>
      tab.status === messageApprovalStatus
        ? (tab.selected = true)
        : (tab.selected = false)
    );
  }

  public getTabTitle(status: MessageApprovalStatus): string {
    return status.charAt(0) + status.slice(1).toLowerCase();
  }

  public onTabClick(messageApprovalStatus: MessageApprovalStatus) {
    this._store.dispatch(
      MessagesActions.selectMessagesTab({ messageApprovalStatus })
    );
  }

  public ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
  }
}
