import { Injectable } from '@angular/core';
import { BaseService } from '../../common/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService extends BaseService {

  constructor(protected override $http: HttpClient) { 
    super($http);
  }
}
