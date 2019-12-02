import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewannouncementComponent } from './teacher-viewannouncement.component';

describe('TeacherViewannouncementComponent', () => {
  let component: TeacherViewannouncementComponent;
  let fixture: ComponentFixture<TeacherViewannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherViewannouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
