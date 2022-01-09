import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
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

  getAllUsers(): Observable<any> {
    return this._http.get<any>(this._base + '/all');
  }

  saveUser(chanteur:Chanteur): Observable<any> {
    return this._http.post<Chanteur>(this._base, chanteur);
  }

  deleteUserById(id:string): Observable<any> {
    let params = new HttpParams().set("id",id);
    return this._http.delete(this._base, {params})
  }

  setImageDuoSrc(chanteurA: Chanteur, chanteurB: Chanteur){
    if (chanteurA.prenom.localeCompare(chanteurB.prenom) == -1) {
      return this.setUrl(chanteurA,chanteurB);
    }
    else {
      return this.setUrl(chanteurB,chanteurA);
    }
  }
  
  setUrlSolo(chanteur: Chanteur){
    return "/assets/" + chanteur.prenom + ".jpg";
  }

  setUrl(chanteurA: Chanteur, chanteurB: Chanteur){
    return "/assets/" + chanteurA.prenom + "_" + chanteurB.prenom + ".jpg";
  }
}
