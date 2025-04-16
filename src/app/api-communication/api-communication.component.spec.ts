import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCommunicationComponent } from './api-communication.component';

describe('ApiCommunicationComponent', () => {
  let component: ApiCommunicationComponent;
  let fixture: ComponentFixture<ApiCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
