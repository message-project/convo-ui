import { Observable } from "rxjs";
import { MessageApprovalStatus } from "../models/message.model";

export interface IMessagesListTab {
  status: MessageApprovalStatus;
  selected: boolean;
  count: Observable<number>;
 }
