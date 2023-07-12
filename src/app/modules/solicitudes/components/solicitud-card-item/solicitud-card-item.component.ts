import { Component, Input } from '@angular/core';
import { ISolicitudViewModel } from '../../viewmodels/isolicitud-viewmodel';

@Component({
  selector: 'app-solicitud-card-item',
  templateUrl: './solicitud-card-item.component.html',
  styleUrls: ['./solicitud-card-item.component.scss']
})
export class SolicitudCardItemComponent {
  @Input()
  item!: ISolicitudViewModel;
}
