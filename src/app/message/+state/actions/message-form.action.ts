import { createAction, props } from '@ngrx/store';
import { Message } from '../../shared/models/message.model';

export const loadMessageFormOptions = createAction(
  '[Message Form] Load Message Form options'
);

export const loadMessageFormOptionsSuccess = createAction(
  '[Message Form] Load Message Form options Success',
  props<{ options: any }>()
);

export const loadMessageFormOptionsFailure = createAction(
  '[Message Form] Load Message Form options Failure',
  props<{ error: any }>()
);

export const createMessage = createAction(
  '[Message Form] Create Message',
  props<{ message: Message }>()
);

export const createMessageSuccess = createAction(
  '[Message Form] Create Message Success'
);

export const createMessageFailure = createAction(
  '[Message Form] Create Message Failure',
  props<{ error: any }>()
);

export const updateMessage = createAction(
  '[Message Form] Update Message',
  props<{ message: Message }>()
);

export const updateMessageSuccess = createAction(
  '[Message Form] Update Message Success'
);

export const updateMessageFailure = createAction(
  '[Message Form] Update Message Failure',
  props<{ error: any }>()
);
