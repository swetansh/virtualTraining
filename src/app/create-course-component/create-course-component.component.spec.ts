import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponentComponent } from './create-course-component.component';

describe('CreateCourseComponentComponent', () => {
  let component: CreateCourseComponentComponent;
  let fixture: ComponentFixture<CreateCourseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
