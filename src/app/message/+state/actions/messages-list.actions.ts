import { createAction, props } from '@ngrx/store';
import {
  Message,
  MessageApprovalStatus,
} from '../../shared/models/message.model';

export const deleteMessage = createAction(
  '[Message List] Delete Message',
  props<{ message: Message }>()
);

export const deleteMessageSuccess = createAction(
  '[Message List] Delete Message Success'
);

export const deleteMessageFailure = createAction(
  '[Message List] Delete Message Failure',
  props<{ error: string }>()
);

export const loadMessageStats = createAction(
  '[Message List] Load Message Stats'
);

export const loadMessageStatsSuccess = createAction(
  '[Message List] Load Message Stats Success',
  props<{
    pendingMessagesAmount: number;
    approvedMessagesAmount: number;
    rejectedMessagesAmount: number;
  }>()
);

export const loadMessagesStatsFailure = createAction(
  '[Message List] Load Message Stats Failure'
);

export const setPendingMessagesCount = createAction(
  '[ Messages List] Set Pending Messages number',
  props<{ count: number }>()
);

export const setApprovedMessagesCount = createAction(
  '[ Messages List] Set Approved Messages number',
  props<{ count: number }>()
);

export const setRejectedMessagesCount = createAction(
  '[ Messages List] Set Rejected Messages number',
  props<{ count: number }>()
);

export const selectMessagesTab = createAction(
  '[ Messages List] Select Messages tab',
  props<{ messageApprovalStatus: MessageApprovalStatus }>()
);

export const updateSelectedMessagesList = createAction(
  '[ Messages List] Row Select',
  props<{ selectedMessages: Message[] }>()
);



export const loadApprovedMessages = createAction(
  '[ Messages List] Load Approved Messages',
  props<{ messagesApprovedStatus: MessageApprovalStatus }>()
);


export const loadApprovedMessagesSuccess = createAction(
  '[ Messages List] Load Approved Success',
  props<{ data: Message[]}>()
);


export const loadApprovedMessagesFailure = createAction(
  '[ Messages List] Load Approved Messages Failure',
);


export const loadPendingMessages = createAction(
  '[ Messages List] Load Pending Messages',
  props<{ messagesApprovedStatus: MessageApprovalStatus }>()
);


export const loadPendingMessagesSuccess = createAction(
  '[ Messages List] Load Pening Success',
  props<{ data: Message[]}>()
);


export const loadPendingMessagesFailure = createAction(
  '[ Messages List] Load Pending Messages Failure',
);


export const loadRejectedMessages = createAction(
  '[ Messages List] Load Rejected Messages',
  props<{ messagesApprovedStatus: MessageApprovalStatus }>()
);


export const loadRejectedMessagesSuccess = createAction(
  '[ Messages List] Load Rejected Success',
  props<{ data: Message[]}>()
);


export const loadRejectedMessagesFailure = createAction(
  '[ Messages List] Load Rejected Messages Failure',
);




