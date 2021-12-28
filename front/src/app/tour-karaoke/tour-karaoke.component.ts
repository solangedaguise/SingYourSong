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
  urlChanteurA: string = '';
  urlChanteurB: string = '';
  imageDuo: boolean = false;

  constructor(
    private chanteurService: ChanteurService,
    private chansonService: ChansonService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.random();
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
          this.urlChanteurA = this.chanteurService.setUrlSolo(this.chanteurA);
          this.urlChanteurB = this.chanteurService.setUrlSolo(this.chanteurB);

          if (this.chanteurA.prenom.localeCompare(this.chanteurB.prenom) == -1) {
            this.urlPhoto = this.chanteurService.setUrl(this.chanteurA,this.chanteurB);
          }
          else {
            this.urlPhoto = this.chanteurService.setUrl(this.chanteurB,this.chanteurA);
          }
          console.log("HO");
          this.imageExists(this.urlPhoto, (_exists: any) => {
            this.imageDuo = _exists;
            console.log(this.imageDuo);
          });
        });
      });
  }

  imageExists(url: string, callback:any) {
      var img = new Image();
      img.onload = function() {callback(true);};
      img.onerror = function() { callback(false); };
      img.src = url;
  }

}

