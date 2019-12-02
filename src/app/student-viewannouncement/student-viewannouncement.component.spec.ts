import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewannouncementComponent } from './student-viewannouncement.component';

describe('StudentViewannouncementComponent', () => {
  let component: StudentViewannouncementComponent;
  let fixture: ComponentFixture<StudentViewannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewannouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
