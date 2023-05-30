import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MessagesState } from '../message.reducer';
import { MessagesListService } from '../../message-list/services/messages-list.service';
import * as MessagesActions from '../actions';
import { catchError, concatMap, forkJoin, map, mergeMap, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {
  IMessage,
  Message,
  MessageApprovalStatus,
} from '../../shared/models/message.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACK_BAR_CONFIG } from '../../shared/constants/snack-bar-config.constant';

@Injectable()
export class MessageListEffects {
  //LOAD
  loadApprovedMessages$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MessagesActions.loadApprovedMessages),
      mergeMap((action) =>
        this._messagesListService
          .getMessages(action.messagesApprovedStatus)
          .pipe(
            map((messages: IMessage[]) => {
              return MessagesActions.loadApprovedMessagesSuccess({
                data: messages.map((message: IMessage) => new Message(message)),
              });
            }),
            catchError((error: HttpErrorResponse) => {
              this._snackBar.open(
                'Could not load approved messages',
                undefined,
                SNACK_BAR_CONFIG
              );
              return of(MessagesActions.loadApprovedMessagesFailure());
            })
          )
      )
    )
  );

  loadPendingMessages$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MessagesActions.loadPendingMessages),
      mergeMap((action) =>
        this._messagesListService
          .getMessages(action.messagesApprovedStatus)
          .pipe(
            map((messages: IMessage[]) => {
              return MessagesActions.loadPendingMessagesSuccess({
                data: messages.map((message: IMessage) => new Message(message)),
              });
            }),
            catchError((error: HttpErrorResponse) => {
              this._snackBar.open(
                'Could not load pending messages',
                undefined,
                SNACK_BAR_CONFIG
              );
              return of(MessagesActions.loadPendingMessagesFailure());
            })
          )
      )
    )
  );

  loadRejectedMessages$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MessagesActions.loadRejectedMessages),
      mergeMap((action) =>
        this._messagesListService
          .getMessages(action.messagesApprovedStatus)
          .pipe(
            map((messages: IMessage[]) => {
              return MessagesActions.loadRejectedMessagesSuccess({
                data: messages.map((message: IMessage) => new Message(message)),
              });
            }),
            catchError((error: HttpErrorResponse) => {
              this._snackBar.open(
                'Could not load rejected messages',
                undefined,
                SNACK_BAR_CONFIG
              );
              return of(MessagesActions.loadRejectedMessagesFailure());
            })
          )
      )
    )
  );

  //Load STATS
  loadMessagesStats$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MessagesActions.loadMessageStats),
      mergeMap((action) =>
        forkJoin([
          this._messagesListService.getMessages(MessageApprovalStatus.PENDING),
          this._messagesListService.getMessages(MessageApprovalStatus.APPROVED),
          this._messagesListService.getMessages(MessageApprovalStatus.REJECTED),
        ]).pipe(
          map(
            ([pendingMessages, approvedMessages, rejectedMessages]: [
              IMessage[],
              IMessage[],
              IMessage[]
            ]) => {
              return MessagesActions.loadMessageStatsSuccess({
                pendingMessagesAmount: pendingMessages.length,
                approvedMessagesAmount: approvedMessages.length,
                rejectedMessagesAmount: rejectedMessages.length,
              });
            }
          )
        )
      ),
      catchError((error: HttpErrorResponse) => {
        return of(
          MessagesActions.loadMessageFormOptionsFailure({
            error: error.message,
          })
        );
      })
    )
  );

  selectMessagesTabs$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        MessagesActions.createMessageSuccess,
        MessagesActions.updateMessageSuccess
      ),
      mergeMap((action) =>
        of(
          MessagesActions.selectMessagesTab({
            messageApprovalStatus: MessageApprovalStatus.PENDING,
          })
        )
      )
    )
  );

  //DELETE
  deleteMessage$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MessagesActions.deleteMessage),
      mergeMap((action) =>
        this._messagesListService.deleteMessage(action.message.id).pipe(
          map(() => {
            return MessagesActions.deleteMessageSuccess();
          }),
          catchError((error: HttpErrorResponse) =>
            of(MessagesActions.deleteMessageFailure({ error: error.message }))
          )
        )
      )
    )
  );

  deleteMessageSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MessagesActions.deleteMessageSuccess),
      tap((payload) => {
        this._snackBar.open(
          'This message was deleted successfully!',
          undefined,
          SNACK_BAR_CONFIG
        );
      }),
      concatMap(() => [
        MessagesActions.selectMessagesTab({
          messageApprovalStatus: MessageApprovalStatus.PENDING,
        }),
        MessagesActions.loadMessageStats(),
      ])
    )
  );

  deleteMessageFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(MessagesActions.deleteMessageFailure),
        tap((payload) => {
          this._snackBar.open(
            'Error deleting this message!',
            undefined,
            SNACK_BAR_CONFIG
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _actions$: Actions,
    private _store: Store<MessagesState>,
    private _messagesListService: MessagesListService,
    private _snackBar: MatSnackBar
  ) {}
}
