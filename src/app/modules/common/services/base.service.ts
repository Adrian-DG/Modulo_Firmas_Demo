import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected readonly url: string = '/assets/data.json';

  constructor(protected $http: HttpClient) { }

  getAll<T>(): Observable<T[]> {
    return this.$http.get<T[]>(this.url);
  }
}
