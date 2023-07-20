import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { BaseModule } from '../common/base.module';
import { IndexComponent } from './pages/index/index.component';
import { SolicitudCardItemComponent } from './components/solicitud-card-item/solicitud-card-item.component';
import { CedulaPipe } from './pipes/cedula.pipe';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SignatureComponent } from './pages/signature/signature.component';
import { DigitalcontractComponent } from './pages/digitalcontract/digitalcontract.component';


@NgModule({
  declarations: [
    IndexComponent,
    SolicitudCardItemComponent,
    CedulaPipe,
    ContractsComponent,
    SignatureComponent,
    DigitalcontractComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    BaseModule,
    NgbModule,
    PdfViewerModule
  ]
})
export class SolicitudesModule { }
