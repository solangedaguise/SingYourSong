import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CrudService } from '../core/service/crud.service';
import { Chanteur } from '../model/chanteur';

@Injectable({
  providedIn: 'root'
})
export class ChanteurService extends CrudService<Chanteur,string> {
  constructor(protected override _http: HttpClient) { 
    super(_http, environment.apiUrl + '/user');
  }

  getRandomUsers(nombreJoueurs: number): Observable<any> {
    let params = new HttpParams().set("nombreJoueurs",nombreJoueurs);
    return this._http.get<any>(this._base + '/random', {params});
  }
}
