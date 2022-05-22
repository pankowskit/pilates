import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesS3Component } from './prices-s3.component';

describe('PricesS3Component', () => {
  let component: PricesS3Component;
  let fixture: ComponentFixture<PricesS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
