import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, AfterViewInit{
  
  private id!: number;
  constructor(private $activeRoute: ActivatedRoute, public _solicitudes: SolicitudService){}
  
  ngOnInit(): void {
    let param = this.$activeRoute.snapshot.paramMap.get('id');
    if(param) {
      this.id = parseInt(param);
    }
  }
  ngAfterViewInit(): void {
    setTimeout(() =>  this._solicitudes.getSolicitudContracts(this.id), 2000);
  }

}
