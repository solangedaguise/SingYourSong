import { Component, OnInit } from '@angular/core';
import { Chanteur } from 'src/app/model/chanteur';
import { ChanteurService } from 'src/app/service/chanteur.service';

@Component({
  selector: 'app-admin-joueur',
  templateUrl: './admin-joueur.component.html',
  styleUrls: ['./admin-joueur.component.scss']
})
export class AdminJoueurComponent implements OnInit {
  chanteurs!: Chanteur[];
  editChanteur : Chanteur = new Chanteur();
  showForm!: boolean;
  constructor(
    private chanteurService: ChanteurService) { }

  ngOnInit(): void {
    this.chanteurService.getAllUsers().subscribe( (users) => { console.log(users);this.chanteurs = users} );
    this.showForm = false;
  }
  
  modifierJoueur(chanteur: Chanteur){
    this.editChanteur = chanteur;
    this.showForm=true;
  }

  suppressionJoueur(chanteur: Chanteur){
    this.chanteurService.delete(chanteur.id).subscribe( (reponse) => {
      console.log(chanteur.prenom + " supprimé");
      this.ngOnInit();
    });
  }

  displayForm(){
    this.showForm = true;
  }
  //TODO pagination de l'affichage  des gens
  //TODO Gérer l'inventaire des joueurs, apparences cartouches avec commentaire et possibilité d'éditer
}
