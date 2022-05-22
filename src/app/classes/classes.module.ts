import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes/classes.component';
import { ClassesS1Component } from './classes-s1/classes-s1.component';
import { ClassesS2Component } from './classes-s2/classes-s2.component';
import { ClassesS3Component } from './classes-s3/classes-s3.component';


@NgModule({
  declarations: [
    ClassesComponent,
    ClassesS1Component,
    ClassesS2Component,
    ClassesS3Component
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
