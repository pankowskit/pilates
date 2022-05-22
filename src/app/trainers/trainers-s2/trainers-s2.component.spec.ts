import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersS2Component } from './trainers-s2.component';

describe('TrainersS2Component', () => {
  let component: TrainersS2Component;
  let fixture: ComponentFixture<TrainersS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
