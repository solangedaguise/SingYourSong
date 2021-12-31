import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CrudService } from '../core/service/crud.service';
import { Chanson } from '../model/chanson';

@Injectable({
  providedIn: 'root'
})
export class ChansonService extends CrudService<Chanson,string> {
  constructor(protected override _http: HttpClient) { 
    super(_http, environment.apiUrl + '/chanson');
  }

  getRandomChansons(nombreChansons: number, listeChansonId: string[]): Observable<any> {
    console.log("ON VEUT DU RANDOM", listeChansonId);
    let params = new HttpParams().set("nombreChansons",nombreChansons);
    return this._http.post<any>(this._base + '/random', listeChansonId, {params});
  }
}
