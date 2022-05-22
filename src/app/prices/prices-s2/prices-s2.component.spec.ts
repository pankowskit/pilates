import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesS2Component } from './prices-s2.component';

describe('PricesS2Component', () => {
  let component: PricesS2Component;
  let fixture: ComponentFixture<PricesS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
