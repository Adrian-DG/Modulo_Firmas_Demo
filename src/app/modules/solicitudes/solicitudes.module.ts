import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { BaseModule } from '../common/base.module';
import { IndexComponent } from './pages/index/index.component';
import { SolicitudCardItemComponent } from './components/solicitud-card-item/solicitud-card-item.component';


@NgModule({
  declarations: [
    IndexComponent,
    SolicitudCardItemComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    BaseModule
  ]
})
export class SolicitudesModule { }
