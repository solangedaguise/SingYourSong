import { Component, Inject, OnInit } from '@angular/core';
import { Chanteur } from 'src/app/domain/chanteur/model/chanteur';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChanteurService } from '../service/chanteur.service';

export interface DialogData {
  pseudo: string;
  commentaire: string;
}

@Component({
  selector: 'app-admin-joueur',
  templateUrl: './admin-joueur.component.html',
  styleUrls: ['./admin-joueur.component.scss']
})
export class AdminJoueurComponent implements OnInit {
  chanteurs!: Chanteur[];
  editChanteur : Chanteur = new Chanteur();
  showForm!: boolean;
  pseudo!:string;
  commentaire!:string;

  constructor(
    private chanteurService: ChanteurService,
    private dialog: MatDialog) { }

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


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditJoueurDialog, {
      width: '22%',
      data: {name: this.pseudo, animal: this.commentaire},
    });

    dialogRef.afterClosed().subscribe(result => {
      let newChanteur = new Chanteur();
      newChanteur.prenom = result.pseudo;
      newChanteur.commentaire = result.commentaire;
    this.chanteurService.saveUser(newChanteur).subscribe((res) => {
      window.location.reload();
      console.log(newChanteur + "ajouté !!");
    });
      console.log('The dialog was closed');
    });
  }

  openEditDialog(chanteur:Chanteur): void {
    const dialogRef = this.dialog.open(DialogEditJoueurDialog, {
      width: '22%',
      data: {pseudo: this.pseudo, commentaire: this.commentaire},
    });

    dialogRef.afterClosed().subscribe(result => {
      chanteur.prenom = result.pseudo;
      chanteur.commentaire = result.commentaire;
      console.log(chanteur.id + " id du joueur modifié !! ")
    this.chanteurService.saveUser(chanteur).subscribe((res) => {
      window.location.reload();
      console.log(chanteur + "modifié !!");
    });
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-edit-joueur-dialog',
  templateUrl: 'dialog-edit-joueur-dialog.html',
})
export class DialogEditJoueurDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogEditJoueurDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
