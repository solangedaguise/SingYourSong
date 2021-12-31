import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chanson } from '../model/chanson';
import { ListeChansons } from '../model/liste-chansons';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
videosChanteesEvent: BehaviorSubject<ListeChansons> = new BehaviorSubject(new ListeChansons());
videosChantees$ = this.videosChanteesEvent.asObservable();
  constructor() { }
  set videosChantees(liste: ListeChansons) {
    liste.listeChansons = liste.listeChansons.filter(
      (element, i) => i === liste.listeChansons.indexOf(element)
    );
    this.videosChanteesEvent.next(liste);
  }
  get videosChantees() {
    return this.videosChanteesEvent.getValue();
  }
}


