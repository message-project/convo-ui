export interface IMessage {
  id: number ;
  text: string;
  createdAt: string;
  updatedAt: string;
  status: MessageApprovalStatus;
  reason: string;
  category: string;
}

export class Message implements IMessage {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  status: MessageApprovalStatus;
  reason: string;
  category: string

  constructor(raw: IMessage) {
    this.id = raw.id;
    this.text = raw.text;
    this.createdAt = raw.createdAt;
    this.updatedAt = raw.updatedAt;
    this.status = raw.status;
    this.reason = raw.reason;
    this.category = raw.category
  }
}

export enum MessageApprovalStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}
