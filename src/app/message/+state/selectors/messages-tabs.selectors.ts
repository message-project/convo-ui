import { createSelector } from '@ngrx/store';
import { getMessagesState } from './messages.selector';
import { MessagesState } from '../message.reducer';

export const getApprovedMessagesCount = createSelector(
  getMessagesState,
  (state: MessagesState) => state.approvedMessages.count
);

export const getPendingMessagesCount = createSelector(
  getMessagesState,
  (state: MessagesState) => state.pendingMessages.count
);

export const getrejectedMessagesCount = createSelector(
  getMessagesState,
  (state: MessagesState) => state.rejectedMessages.count
);

export const getMessagesSelectedTab = createSelector(
  getMessagesState,
  (state: MessagesState) => state.messagesSelectedTab
);
