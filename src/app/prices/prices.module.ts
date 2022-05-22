import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices/prices.component';
import { PricesS1Component } from './prices-s1/prices-s1.component';
import { PricesS2Component } from './prices-s2/prices-s2.component';
import { PricesS3Component } from './prices-s3/prices-s3.component';


@NgModule({
  declarations: [
    PricesComponent,
    PricesS1Component,
    PricesS2Component,
    PricesS3Component
  ],
  imports: [
    CommonModule,
    PricesRoutingModule
  ]
})
export class PricesModule { }
