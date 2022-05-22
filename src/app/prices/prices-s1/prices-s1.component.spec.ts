import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesS1Component } from './prices-s1.component';

describe('PricesS1Component', () => {
  let component: PricesS1Component;
  let fixture: ComponentFixture<PricesS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
