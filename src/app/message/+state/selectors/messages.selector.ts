import { createFeatureSelector } from '@ngrx/store';
import { MESSAGES_FEATURE_KEY, MessagesState } from '../message.reducer';

export const getMessagesState =
  createFeatureSelector<MessagesState>(MESSAGES_FEATURE_KEY);
