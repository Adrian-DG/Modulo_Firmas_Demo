import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { BaseModule } from '../common/base.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    BaseModule
  ]
})
export class SolicitudesModule { }
