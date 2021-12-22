import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prenom',
  templateUrl: './prenom.component.html',
  styleUrls: ['./prenom.component.scss']
})
export class PrenomComponent implements OnInit {
  @Input() prenom: string ='inconnu';
  @Input() commantaire: string ='Quelle incroyable personne';
  constructor() { }

  ngOnInit(): void {
  }

}
