import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../services/solicitud.service';
import { ISolicitudViewModel } from '../../viewmodels/isolicitud-viewmodel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  solicitudes!: ISolicitudViewModel[];
  constructor(private _solicitudes: SolicitudService){}
  
  ngOnInit(): void {
    this.getAllSolicitudes();
  }

  getAllSolicitudes(): void {
    this._solicitudes.getAll<ISolicitudViewModel>()
    .subscribe((data: ISolicitudViewModel[]) =>{
      console.table(data);
      this.solicitudes = data
    });
  }
  
}
