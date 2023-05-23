export interface IMessage {
  id: number ;
  text: string;
  createdAt: string;
  updatedAt: string;
  messageApprovalStatus: MessageApprovalStatus;
  reason: string;
}

export class Message implements IMessage {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  messageApprovalStatus: MessageApprovalStatus;
  reason: string;

  constructor(raw: IMessage) {
    this.id = raw.id;
    this.text = raw.text;
    this.createdAt = raw.createdAt;
    this.updatedAt = raw.updatedAt;
    this.messageApprovalStatus = raw.messageApprovalStatus;
    this.reason = raw.reason;
  }
}

export enum MessageApprovalStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}
