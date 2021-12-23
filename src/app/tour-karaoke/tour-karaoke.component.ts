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
  constructor(
    private chanteurService: ChanteurService
  ) { }

  ngOnInit(): void {
    //TODO appel module random chanteur
    const idChanteurA = "1";
    const idChanteurB = "3";
    this.chanteurService.findOne(idChanteurA).subscribe((chanteur) => this.chanteurA = chanteur);
    this.chanteurService.findOne(idChanteurB).subscribe((chanteur) => this.chanteurB = chanteur);
  }

}
