import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices/prices.component';


@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    CommonModule,
    PricesRoutingModule
  ]
})
export class PricesModule { }
