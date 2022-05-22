import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersS1Component } from './trainers-s1.component';

describe('TrainersS1Component', () => {
  let component: TrainersS1Component;
  let fixture: ComponentFixture<TrainersS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
