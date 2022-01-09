import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chanteur } from 'src/app/model/chanteur';
import { ChanteurService } from 'src/app/service/chanteur.service';

@Component({
  selector: 'app-admin-joueur',
  templateUrl: './admin-joueur.component.html',
  styleUrls: ['./admin-joueur.component.scss']
})
export class AdminJoueurComponent implements OnInit {
  formCreation!: FormGroup;
  chanteurs!: Chanteur[];
  showForm!: boolean;
  constructor(
    private fb: FormBuilder,
    private chanteurService: ChanteurService,
    private router: Router) { }

  ngOnInit(): void {
    this.chanteurService.getAllUsers().subscribe( (users) => { console.log(users);this.chanteurs = users} );
    this.showForm = false;
    this.creerFormulaire();
  }

  creerFormulaire() {
    this.formCreation = this.fb.group({
      pseudoJoueur: ['', [Validators.required, Validators.maxLength(20)]],
      commentaire: ['', Validators.maxLength(100)],
    });
  }

  getPrenom(){
    return this.formCreation.get('pseudoJoueur')?.value;
  }

  getCommentaire(){
    return this.formCreation.get('commentaire')?.value;
  }

  ajoutChanteur(){
    let newChanteur = new Chanteur();
    newChanteur.prenom = this.getPrenom();
    newChanteur.commentaire = this.getCommentaire();
    this.chanteurService.saveUser(newChanteur).subscribe((res) => this.ngOnInit())
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
}
