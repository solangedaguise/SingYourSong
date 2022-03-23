import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chanteur } from 'src/app/domain/chanteur/model/chanteur';
import { ChanteurService } from '../../../service/chanteur.service';

@Component({
  selector: 'app-form-edit-joueur',
  templateUrl: './form-edit-joueur.component.html',
  styleUrls: ['./form-edit-joueur.component.scss']
})
export class FormEditJoueurComponent implements OnInit {
  @Input() chanteur: Chanteur = new Chanteur();
  formCreation!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chanteurService: ChanteurService) { }

  ngOnInit(): void {
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
    this.chanteurService.saveUser(newChanteur).subscribe((res) => {
      window.location.reload();
      console.log(newChanteur + "ajouté !!");
    });
  }
}
