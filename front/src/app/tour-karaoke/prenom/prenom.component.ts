import { Component, Input, OnInit } from '@angular/core';
import { Chanteur } from 'src/app/domain/chanteur/model/chanteur';

@Component({
  selector: 'app-prenom',
  templateUrl: './prenom.component.html',
  styleUrls: ['./prenom.component.scss']
})
export class PrenomComponent implements OnInit {
  @Input() chanteur: Chanteur = new Chanteur();
  constructor() { }

  ngOnInit(): void {
  }

}
