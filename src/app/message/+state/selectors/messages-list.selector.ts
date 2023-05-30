import { createSelector } from "@ngrx/store";
import { MessagesState } from "../message.reducer";
import { getMessagesState } from "./messages.selector";

export const getApprovedMesssages = createSelector(
    getMessagesState,
    (state: MessagesState) => state.approvedMessages.data
)

export const getApprovedMesssagesStatus = createSelector(
    getMessagesState,
    (state: MessagesState) => state.approvedMessages.isLoading
)

export const getPendingMesssages = createSelector(
    getMessagesState,
    (state: MessagesState) => state.pendingMessages.data
)

export const getPendingMesssagesStatus = createSelector(
    getMessagesState,
    (state: MessagesState) => state.pendingMessages.isLoading
)


export const getRejectedMesssages = createSelector(
    getMessagesState,
    (state: MessagesState) => state.rejectedMessages.data
)

export const getRejectedMesssagesStatus = createSelector(
    getMessagesState,
    (state: MessagesState) => state.rejectedMessages.isLoading
)




