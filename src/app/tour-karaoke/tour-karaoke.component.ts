import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-karaoke',
  templateUrl: './tour-karaoke.component.html',
  styleUrls: ['./tour-karaoke.component.scss']
})
export class TourKaraokeComponent implements OnInit {
  joueurA: string = 'inconnu';
  joueurB: string = 'inconnu';
  constructor() { }

  ngOnInit(): void {
  }

}
