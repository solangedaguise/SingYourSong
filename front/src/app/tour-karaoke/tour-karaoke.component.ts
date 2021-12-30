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
  chanteurJoker: Chanteur = new Chanteur;
  nbChanteurs: number = 2;
  chanson: Chanson = new Chanson();
  urlVideoSafe!: SafeResourceUrl;
  lienOnglet! : string;
  urlPhoto: string = '';
  urlChanteurA: string = '';
  urlChanteurB: string = '';
  imageDuo!: boolean ;

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
          this.nbChanteurs = this.chanson.nombreChanteurs + 1;
        } else {
          this.nbChanteurs = 3;
        }
        // this.urlVideoSafe = this.chanson.lien;
        this.urlVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.chanson.lienEmbed);
        this.lienOnglet = this.chanson.lien;
        
        //Recup des chanteurs
        this.chanteurService.getRandomUsers(this.nbChanteurs)
        .subscribe((chanteurs) => {
          this.chanteurA = chanteurs[0];
          this.chanteurB = chanteurs[1];
          this.chanteurJoker = chanteurs[2];
          console.log(this.chanteurJoker);
          this.setImage(this.chanteurA,this.chanteurB);
        });
      });
  }

  imageExists(url: string, callback:any) {
      var img = new Image();
      img.onload = function() {callback(true);};
      img.onerror = function() { callback(false); };
      img.src = url;
  }

  private setImage(chanteurA: Chanteur, chanteurB: Chanteur){
    this.urlPhoto = this.chanteurService.setImageDuoSrc(chanteurA, chanteurB);
          this.imageExists(this.urlPhoto, (_exists: any) => {
            this.imageDuo = _exists;
          });

          if (!this.imageDuo) {
            this.urlChanteurA = this.chanteurService.setUrlSolo(chanteurA);
            this.urlChanteurB = this.chanteurService.setUrlSolo(chanteurB);
          }
  }

  changeChanteur(chanteur:Chanteur){
    if (chanteur.prenom == this.chanteurA.prenom){
      this.chanteurA = this.chanteurJoker;
    }
    else{
      this.chanteurB = this.chanteurJoker;
    }
    this.setImage(this.chanteurA,this.chanteurB);
  }
}

