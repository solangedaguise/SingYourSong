import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../core/service/crud.service';
import { Chanson } from '../model/chanson';

@Injectable({
  providedIn: 'root'
})
export class ChansonService extends CrudService<Chanson,string> {
  constructor(protected override _http: HttpClient) { 
    super(_http, environment.apiUrl + '/chansons');
  }
}
