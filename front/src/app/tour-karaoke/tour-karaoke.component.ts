import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Chanson } from '../model/chanson';
import { Chanteur } from '../model/chanteur';
import { ChansonService } from '../service/chanson.service';
import { ChanteurService } from '../service/chanteur.service';

@Component({
  selector: 'app-tour-karaoke',
  templateUrl: './tour-karaoke.component.html',
  styleUrls: ['./tour-karaoke.component.scss']
})
export class TourKaraokeComponent implements OnInit {
  chanteurA: Chanteur = new Chanteur;
  chanteurB: Chanteur = new Chanteur;
  nbChanteurs: number = 2;
  chanson: Chanson = new Chanson();
  urlVideoSafe!: SafeResourceUrl;
  lienOnglet! : string;
  urlPhoto: string = '';
  constructor(
    private chanteurService: ChanteurService,
    private chansonService: ChansonService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.random();
    //TODO Trier les deux prénoms par ordre alphabetique A B
    
    }

    random() {
      //Recup de la musique
      this.chansonService.getRandomChansons(1)
      .subscribe((chansons) => {
        this.chanson = chansons[0];
        if (this.chanson.nombreChanteurs !==0 && 
          this.chanson.nombreChanteurs !== null && 
          this.chanson.nombreChanteurs !== undefined) {
          this.nbChanteurs = this.chanson.nombreChanteurs;
        } else {
          this.nbChanteurs = 2;
        }
        // this.urlVideoSafe = this.chanson.lien;
        this.urlVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.chanson.lienEmbed);
        this.lienOnglet = this.chanson.lien;
        
        //Recup des chanteurs
        this.chanteurService.getRandomUsers(this.nbChanteurs)
        .subscribe((chanteurs) => {
          this.chanteurA = chanteurs[0];
          this.chanteurB = chanteurs[1];
          this.urlPhoto = "/assets/" + this.chanteurA.prenom + "_" + this.chanteurB.prenom + ".jpg";
        });
      });
    }

}
