import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesS3Component } from './classes-s3.component';

describe('ClassesS3Component', () => {
  let component: ClassesS3Component;
  let fixture: ComponentFixture<ClassesS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
