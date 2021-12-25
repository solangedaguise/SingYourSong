import { Component, OnInit } from '@angular/core';
import { Chanteur } from '../model/chanteur';
import { ChanteurService } from '../service/chanteur.service';

@Component({
  selector: 'app-tour-karaoke',
  templateUrl: './tour-karaoke.component.html',
  styleUrls: ['./tour-karaoke.component.scss']
})
export class TourKaraokeComponent implements OnInit {
  chanteurA: Chanteur = new Chanteur;
  chanteurB: Chanteur = new Chanteur;
  urlPhoto: string = '';
  constructor(
    private chanteurService: ChanteurService,
  ) { }

  ngOnInit(): void {
    //TODO appel module random chanteur
    this.chanteurA.commentaire="Bing!!!";
    this.chanteurA.prenom="Chandler";

    this.chanteurB.commentaire="OH...MY...GOD!!!";
    this.chanteurB.prenom="Monica";

    //TODO Trier les deux prénoms par ordre alphabetique A B
    this.urlPhoto = "/assets/" + this.chanteurA.prenom + "_" + this.chanteurB.prenom + ".jpg";
    }

}
