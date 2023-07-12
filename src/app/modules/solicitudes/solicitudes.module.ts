import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { BaseModule } from '../common/base.module';
import { IndexComponent } from './pages/index/index.component';
import { SolicitudCardItemComponent } from './components/solicitud-card-item/solicitud-card-item.component';
import { CedulaPipe } from './pipes/cedula.pipe';


@NgModule({
  declarations: [
    IndexComponent,
    SolicitudCardItemComponent,
    CedulaPipe
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    BaseModule
  ]
})
export class SolicitudesModule { }
