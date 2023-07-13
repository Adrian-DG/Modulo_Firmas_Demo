import { Injectable } from '@angular/core';
import { BaseService } from '../../common/services/base.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ISolicitudViewModel } from '../viewmodels/isolicitud-viewmodel';
import { IContract } from '../viewmodels/icontract';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService extends BaseService {
  
  private contractSource = new BehaviorSubject<IContract[]>([]);
  public contracts$ = this.contractSource.asObservable();

  constructor(protected override $http: HttpClient) { 
    super($http);
  }

  getSolicitudContracts(id: number) {
    this.$http.get<ISolicitudViewModel[]>(this.url)
    .subscribe((data: ISolicitudViewModel[]) => {
      let { contratos } = data.filter((x: ISolicitudViewModel) => x.id == id)[0];
      this.contractSource.next(contratos);
    });
  }
}
