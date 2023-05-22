import { Action, createReducer, on } from '@ngrx/store';
import { Message, MessageApprovalStatus } from '../shared/models/message.model';
import * as MessagesActions from './actions';

export const MESSAGES_FEATURE_KEY = 'messages';

export interface MessagesTab<T> {
  data: T[];
  count: number;
  isLoading: boolean;
}

export const MessagesTabInitialState = {
  data: [],
  count: 0,
  isLoading: false,
};

export interface MessagesState {
  pendingMessages: MessagesTab<Message>;
  approvedMessages: MessagesTab<Message>;
  rejectedMessages: MessagesTab<Message>;
  messagesSelectedTab: MessageApprovalStatus;
  selectedMessages: Message[];
}

export interface MessagesPartialState {
  readonly [MESSAGES_FEATURE_KEY]: MessagesState;
}

export const initialState: MessagesState = {
  pendingMessages: MessagesTabInitialState,
  approvedMessages: MessagesTabInitialState,
  rejectedMessages: MessagesTabInitialState,
  messagesSelectedTab: MessageApprovalStatus.APPROVED,
  selectedMessages: [],
};

export const messagesRootReducer = createReducer(
  initialState,

  on(
    MessagesActions.updateSelectedMessagesList,
    (state, { selectedMessages }) => ({
      ...state,
      selectedMessages,
    })
  ),

  on(
    MessagesActions.loadMessageStatsSuccess,
    (
      state,
      { pendingMessagesAmount, approvedMessagesAmount, rejectedMessagesAmount }
    ) => ({
      ...state,
      pendingMessages: {
        ...state.pendingMessages,
        count: pendingMessagesAmount,
      },
      approvedMessages: {
        ...state.approvedMessages,
        count: approvedMessagesAmount,
      },
      rejectedMessages: {
        ...state.rejectedMessages,
        count: rejectedMessagesAmount,
      },
    })
  ),

  on(MessagesActions.loadApprovedMessages, (state) => ({
    ...state,
    approvedMessages: {
      ...state.approvedMessages,
      isLoading: true,
    },
  })),

  on(MessagesActions.loadApprovedMessagesSuccess, (state, { data }) => ({
    ...state,
    approvedMessages: {
      ...state.approvedMessages,
      isLoading: false,
      count: data.length,
      data,
    },
  })),

  on(MessagesActions.loadApprovedMessagesFailure, (state) => ({
    ...state,
    approvedMessages: {
      ...state.approvedMessages,
      isLoading: false,
    },
  })),

  on(MessagesActions.loadPendingMessages, (state) => ({
    ...state,
    pendingMessages: {
      ...state.pendingMessages,
      isLoading: true,
    },
  })),

  on(MessagesActions.loadPendingMessagesSuccess, (state, { data }) => ({
    ...state,
    pendingMessages: {
      ...state.pendingMessages,
      isLoading: false,
      count: data.length,
      data,
    },
  })),

  on(MessagesActions.loadPendingMessagesFailure, (state) => ({
    ...state,
    pendingMessages: {
      ...state.pendingMessages,
      isLoading: false,
    },
  })),

  on(MessagesActions.loadRejectedMessages, (state) => ({
    ...state,
    rejectedMessages: {
      ...state.rejectedMessages,
      isLoading: true,
    },
  })),

  on(MessagesActions.loadRejectedMessagesSuccess, (state, { data }) => ({
    ...state,
    rejectedMessages: {
      ...state.rejectedMessages,
      isLoading: false,
      count: data.length,
      data,
    },
  })),

  on(MessagesActions.loadRejectedMessagesFailure, (state) => ({
    ...state,
    rejectedMessages: {
      ...state.pendingMessages,
      isLoading: false,
    },
  })),

  on(
    MessagesActions.selectMessagesTab,
    (state, { messagesApprovedStatus }) => ({
      ...state,
      messagesSelectedTab: messagesApprovedStatus,
    })
  ),

  on(MessagesActions.setApprovedMessagesCount, (state, { count }) => ({
    ...state,
    approvedMessages: {
      ...state.approvedMessages,
      count,
    },
  })),

  on(MessagesActions.setPendingMessagesCount, (state, { count }) => ({
    ...state,
    pendingMessages: {
      ...state.pendingMessages,
      count,
    },
  })),

  on(MessagesActions.setRejectedMessagesCount, (state, { count }) => ({
    ...state,
    rejectedMessages: {
      ...state.rejectedMessages,
      count,
    },
  }))
);

export function reducer(state: MessagesState | undefined, action: Action) {
  return messagesRootReducer(state, action);
}
