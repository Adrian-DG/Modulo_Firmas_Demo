import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContractsComponent } from './pages/contracts/contracts.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: ':id/contratos', component: ContractsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
