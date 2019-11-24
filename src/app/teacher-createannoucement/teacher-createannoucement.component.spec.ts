import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateannoucementComponent } from './teacher-createannoucement.component';

describe('TeacherCreateannoucementComponent', () => {
  let component: TeacherCreateannoucementComponent;
  let fixture: ComponentFixture<TeacherCreateannoucementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCreateannoucementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCreateannoucementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
