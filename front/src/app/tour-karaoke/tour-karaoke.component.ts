import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Chanson } from '../model/chanson';
import { Chanteur } from '../domain/chanteur/model/chanteur';
import { ListeChansons } from '../model/liste-chansons';
import { ChansonService } from '../service/chanson.service';
import { DataStoreService } from '../service/data-store.service';
import { ChanteurService } from '../domain/chanteur/service/chanteur.service';

@Component({
  selector: 'app-tour-karaoke',
  templateUrl: './tour-karaoke.component.html',
  styleUrls: ['./tour-karaoke.component.scss']
})
export class TourKaraokeComponent implements OnInit {
  chanteurA: Chanteur = new Chanteur;
  chanteurB: Chanteur = new Chanteur;
  chanteurJokerA: Chanteur = new Chanteur;
  chanteurJokerB: Chanteur = new Chanteur;
  nbChanteurs: number = 2;
  chanson: Chanson = new Chanson();
  urlVideoSafe!: SafeResourceUrl;
  lienOnglet! : string;
  urlPhoto: string = '';
  urlChanteurA: string = '';
  urlChanteurB: string = '';
  imageDuo!: boolean ;
  chansonsJouees: ListeChansons = new ListeChansons();
  constructor(
    private chanteurService: ChanteurService,
    private chansonService: ChansonService,
    private sanitizer: DomSanitizer,
    private dataStore: DataStoreService
  ) { }

  ngOnInit(): void {
    this.random();
    this.dataStore.videosChantees$.subscribe(listeChansons => {
      this.chansonsJouees = listeChansons;
    });
    }

  random() {
    //Au click sur random, on met l'ancienne vidéo dans la liste des vidéos déjà visionnées
    console.log("LA CHANSON : ", this.chanson);
    if (this.chanson !== undefined) {
      this.chansonsJouees?.listeChansons.push(this.chanson);
    }
    this.dataStore.videosChantees = this.chansonsJouees;
    console.log("ON A DEJA CHANTE CA : ", this.chansonsJouees);
      let chansonsJoueesId = this.chansonsJouees.listeChansons.map(elem => elem.id);
      //Recup de la musique
      this.chansonService.getRandomChansons(1, chansonsJoueesId)
      .subscribe((chansons) => {
        this.chanson = chansons[0];
        if (this.chanson.nombreChanteurs !==0 && 
          this.chanson.nombreChanteurs !== null && 
          this.chanson.nombreChanteurs !== undefined) {
          this.nbChanteurs = this.chanson.nombreChanteurs + 2;
        } else {
          this.nbChanteurs = 4;
        }
        // this.urlVideoSafe = this.chanson.lien;
        this.urlVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.chanson.lienEmbed);
        this.lienOnglet = this.chanson.lien;
        
        //Recup des chanteurs
        this.chanteurService.getRandomUsers(this.nbChanteurs)
        .subscribe((chanteurs) => {
          //TODO 'gerer' le random => suppression des joueurs tirés lors d'une rotation
          this.chanteurA = chanteurs[0];
          this.chanteurB = chanteurs[1];

          //TODO module de reroll complet
          this.chanteurJokerA = chanteurs[2];
          this.chanteurJokerB = chanteurs[3];


          console.log("doit chanter: " + this.chanteurA.prenom + ":" + this.chanteurB.prenom);
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
            console.log("assets Duo exists ?" +this.imageDuo);
            if (!this.imageDuo) {
              console.log("image de : " + this.chanteurA.prenom + ":" + this.chanteurB.prenom);
              this.urlChanteurA = this.chanteurService.setUrlSolo(chanteurA);
              this.urlChanteurB = this.chanteurService.setUrlSolo(chanteurB);
            }
          });
          
  }

  changeChanteur(chanteur:Chanteur){
    if (chanteur.prenom == this.chanteurA.prenom){
      this.chanteurA = this.chanteurJokerA;
    }
    else{
      this.chanteurB = this.chanteurJokerB;
    }
    this.setImage(this.chanteurA,this.chanteurB);
  }
}

