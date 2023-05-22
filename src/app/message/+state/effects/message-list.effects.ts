import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MessagesState } from '../message.reducer';
import { MessagesListService } from '../../message-list/services/messages-list.service';
import * as MessagesActions from '../actions';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageApprovalStatus } from '../../shared/models/message.model';

@Injectable()
export class MessageListEffects {
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
        //Snacbar for success
      }),
      concatMap(() => [
        MessagesActions.selectMessagesTab({
          messagesApprovedStatus: MessageApprovalStatus.PENDING,
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
          //Snackbar for failure
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _actions$: Actions,
    private _store: Store<MessagesState>,
    private _messagesListService: MessagesListService
  ) {}
}
