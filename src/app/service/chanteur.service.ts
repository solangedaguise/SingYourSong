import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../core/service/crud.service';
import { Chanteur } from '../model/chanteur';

@Injectable({
  providedIn: 'root'
})
export class ChanteurService extends CrudService<Chanteur,string> {
  constructor(protected override _http: HttpClient) { 
    super(_http, environment.apiUrl + '/chanteurs');
  }
}
