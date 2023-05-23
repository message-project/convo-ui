import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMessage, Message, MessageApprovalStatus } from '../../shared/models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesListService {
  private url = `${environment.url}/messages`;

  constructor(private _http: HttpClient) {}

  public deleteMessage(messageId: number): Observable<null> {
    return this._http.delete<null>(`${this.url}/${messageId}`);
  }

  public getMessages(approvaleStatus: MessageApprovalStatus | string): Observable<IMessage[]> {
    return this._http.get<IMessage[]>(`${this.url}`);
  }
}
