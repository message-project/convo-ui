import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesListActionsCellRendererComponent } from './messages-list-actions-cell-renderer.component';

describe('MessagesListActionsCellRendererComponent', () => {
  let component: MessagesListActionsCellRendererComponent;
  let fixture: ComponentFixture<MessagesListActionsCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesListActionsCellRendererComponent]
    });
    fixture = TestBed.createComponent(MessagesListActionsCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
