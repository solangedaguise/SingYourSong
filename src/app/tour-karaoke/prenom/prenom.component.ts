import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prenom',
  templateUrl: './prenom.component.html',
  styleUrls: ['./prenom.component.scss']
})
export class PrenomComponent implements OnInit {
  @Input() prenom: string ='inconnu';
  constructor() { }

  ngOnInit(): void {
  }

}