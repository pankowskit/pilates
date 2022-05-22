import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainersS1Component } from './trainers-s1/trainers-s1.component';
import { TrainersS2Component } from './trainers-s2/trainers-s2.component';


@NgModule({
  declarations: [
    TrainersComponent,
    TrainersS1Component,
    TrainersS2Component
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule
  ]
})
export class TrainersModule { }
