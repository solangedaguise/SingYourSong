import { Injectable } from '@angular/core';
import { Chanteur } from '../model/chanteur';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  
  constructor() { }

  findUrlPhoto(prenomA: string, prenomB: string){
    var photoSrc = 'assets/' + prenomA;
    
    return '';
  }
}
