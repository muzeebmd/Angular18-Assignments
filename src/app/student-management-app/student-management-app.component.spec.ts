import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementAppComponent } from './student-management-app.component';

describe('StudentManagementAppComponent', () => {
  let component: StudentManagementAppComponent;
  let fixture: ComponentFixture<StudentManagementAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentManagementAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentManagementAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
