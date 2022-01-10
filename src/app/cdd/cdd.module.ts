import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    MatTableModule
  ]
})
export class CddModule { }
