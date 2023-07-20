import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatureComponent } from './modules/solicitudes/pages/signature/signature.component';
import { DigitalcontractComponent } from './modules/solicitudes/pages/digitalcontract/digitalcontract.component';

const routes: Routes = [
  { 
    path: 'solicitudes', 
    loadChildren: () => 
    import('./modules/solicitudes/solicitudes.module').then((m) => m.SolicitudesModule)
  },
  {
    path:'firma',
    component: SignatureComponent,
    loadChildren:() => import('./modules/solicitudes/solicitudes.module').then((m) => m.SolicitudesModule)
  },
  {
    path:'contrato',
    component: DigitalcontractComponent,
    loadChildren:() => import('./modules/solicitudes/solicitudes.module').then((m) => m.SolicitudesModule)
  },
  { path: '', redirectTo: 'solicitudes',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
